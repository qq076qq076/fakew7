import { Component, ElementRef, HostListener, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DragDirection } from 'src/app/type/drag-direction/drag-direction';
import { DomSanitizer } from '@angular/platform-browser';

export class Windows {
  static appName: string;
  isMin: boolean;
  isMax: boolean;
  setMin: EventEmitter<boolean>;
  setClose: EventEmitter<{}>;
  toggleMax: () => void;
  toggleMin: (isMin: boolean) => void;
  toggleClose: () => void;
}

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
  ) { }

  @Input() name = '';
  @Input() logo = '';
  @Input()
  set minWidth(value: string | number) {
    const num = (typeof value === 'string') ? parseInt(value, 10) : value;
    this._minWidth = num || 200;
  }
  @Input()
  set minHeight(value: string | number) {
    const num = (typeof value === 'string') ? parseInt(value, 10) : value;
    this._minHeight = num || 200;
  }
  @Output() toggleMax = new EventEmitter();
  @Output() toggleMin = new EventEmitter<boolean>();
  @Output() toggleClose = new EventEmitter();

  direction = DragDirection.Default;
  boundary = 15;
  lastX = 0;
  lastY = 0;
  myTop = 50;
  myLeft = 50;
  myWidth: number;
  myHeight: number;
  _minWidth: number;
  _minHeight: number;
  isResizing = false;
  isDragging = false;
  isFocuse = true;

  ngOnInit() {
    this.myWidth = this._minWidth;
    this.myHeight = this._minHeight;
  }

  @HostBinding('style')
  get style() {
    const cursor = this.direction.cursor;
    const top = this.myTop ? this.myTop + 'px' : 'auto';
    const height = this.myHeight ? this.myHeight + 'px' : 'auto';
    const left = this.myLeft ? this.myLeft + 'px' : 'auto';
    const width = this.myWidth ? this.myWidth + 'px' : 'auto';
    return this.sanitizer.bypassSecurityTrustStyle(`
      cursor: ${cursor};
      top: ${top};
      height: ${height};
      left: ${left};
      width: ${width};
    `);
  }

  @HostListener('mousemove', ['$event']) onmouseover(e: MouseEvent) {
    const width = this.elementRef.nativeElement.offsetWidth;
    const height = this.elementRef.nativeElement.offsetHeight;
    const cursorX = Math.min(Math.max(e.offsetX, 0), width);
    const cursorY = Math.min(Math.max(e.offsetY, 0), height);
    if (this.isResizing) {
      return false;
    }
    if (cursorX < this.boundary) {
      if (cursorY < this.boundary) {
        this.direction = DragDirection.LeftTop;
      } else if (height - cursorY < this.boundary) {
        this.direction = DragDirection.LeftBottom;
      } else {
        this.direction = DragDirection.Left;
      }
    } else if (width - cursorX < this.boundary) {
      if (cursorY < this.boundary) {
        this.direction = DragDirection.RightTop;
      } else if (height - cursorY < this.boundary) {
        this.direction = DragDirection.RightBottom;
      } else {
        this.direction = DragDirection.Right;
      }
    } else {
      this.direction = (cursorY < this.boundary) ? DragDirection.Top : DragDirection.Bottom;
    }
  }

  @HostListener('mousedown', ['$event']) resizeStart(e: MouseEvent) {
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    this.isResizing = true;
  }

  @HostListener('document:mousemove', ['$event']) resize(e: MouseEvent) {
    const x = e.clientX - this.lastX;
    const y = e.clientY - this.lastY;
    if (this.isResizing) {
      this.resizeing(x, y);
    }
    if (this.isDragging) {
      this.dragging(x, y);
    }
    this.lastX = e.clientX;
    this.lastY = e.clientY;
  }

  @HostListener('document:mouseup', ['$event']) resizeStop() {
    this.isResizing = false;
    this.isDragging = false;
  }

  preventDefault(e: MouseEvent) {
    if (!this.isResizing) {
      this.direction = DragDirection.Default;
      e.stopPropagation();
    }
  }

  setX(left: number, width: number) {
    const maxRight = this.elementRef.nativeElement.closest('div.desktop').offsetWidth;
    const canSetLeft = this.myLeft + left > 0 && this.myLeft + left + this.myWidth < maxRight;
    const canSetWidth = this.myWidth + width >= this._minWidth && this.myWidth + this.myLeft + width < maxRight;
    if (canSetLeft && canSetWidth) {
      this.myLeft += left;
      this.myWidth += width;
    }
  }

  setY(top: number, height: number) {
    const maxBottom = this.elementRef.nativeElement.closest('div.desktop').offsetHeight;
    const canSetTop = this.myTop + top > 0 && this.myTop + top + this.myHeight < maxBottom;
    const canSetHeight = this.myHeight + height >= this._minHeight && this.myHeight + this.myTop + height < maxBottom;
    if (canSetTop && canSetHeight) {
      this.myTop += top;
      this.myHeight += height;
    }
  }

  startDrag(e: MouseEvent) {
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    this.isDragging = true;
  }

  resizeing(x: number, y: number) {
    switch (this.direction) {
      case DragDirection.LeftTop:
        this.setY(y, -y);
        this.setX(x, -x);
        break;
      case DragDirection.LeftBottom:
        this.setX(x, -x);
        this.setY(0, y);
        break;
      case DragDirection.Left:
        this.setX(x, -x);
        break;
      case DragDirection.RightTop:
        this.setX(0, x);
        this.setY(y, -y);
        break;
      case DragDirection.RightBottom:
        this.setX(0, x);
        this.setY(0, y);
        break;
      case DragDirection.Right:
        this.setX(0, x);
        break;
      case DragDirection.Top:
        this.setY(y, -y);
        break;
      case DragDirection.Bottom:
        this.setY(0, y);
        break;
    }
  }

  dragging(x: number, y: number) {
    this.setX(x, 0);
    this.setY(y, 0);
  }

  hide() {
    this.toggleMin.emit();
  }

  large() {
    this.toggleMax.emit();
  }

  close() {
    this.toggleClose.emit();
  }
}
