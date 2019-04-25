import { Component, ElementRef, HostListener, HostBinding, Input, ComponentFactoryResolver } from '@angular/core';
import { DragDirection } from 'src/app/type/drag-direction/drag-direction';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent {
  constructor(
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer,
  ) {
  }

  name = 'Windows Internet Explorer';
  logo = '/assets/images/ie-icon.png';
  direction = DragDirection.Default;
<<<<<<< HEAD
  startX = 0;
  startY = 0;
=======
>>>>>>> 9b2d6aff19b1a99b4f372e6981edfaffdcebd369
  boundary = 15;
  lastX = 0;
  lastY = 0;
  myTop = 50;
  myLeft = 50;
  myHeight = 300;
  myWidth = 300;
<<<<<<< HEAD
  resizing = false;
=======
  minWidth = 200;
  minHeight = 200;
  isResizing = false;
  isDragging = false;
  isFocuse = true;
>>>>>>> 9b2d6aff19b1a99b4f372e6981edfaffdcebd369

  @HostBinding('style')
  get style() {
    const cursor = this.direction.cursor;
    const top = this.myTop ? this.myTop + 'px' : 'auto';
    const height = this.myHeight ? this.myHeight + 'px' : 'auto';
    const left = this.myLeft ? this.myLeft + 'px' : 'auto';
    const width = this.myWidth ? this.myWidth + 'px' : 'auto';
    return this.sanitizer.bypassSecurityTrustStyle(`cursor: ${cursor};top: ${top}; height: ${height};left: ${left};width: ${width}`);
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

<<<<<<< HEAD
  @HostListener('mousedown', ['$event']) resizeStart(e) {
    this.resizing = true;
    console.log('mousedown')
    console.log(e)
  }

  @HostListener('document:mousemove', ['$event']) resize(e: MouseEvent) {
    if (this.resizing) {
      const x = e.movementX;
      const y = e.movementY;
      const domWidth = this.elementRef.nativeElement.offsetWidth;
      const domHeight = this.elementRef.nativeElement.offsetHeight;
      const domTop = this.elementRef.nativeElement.offsetTop;
      const domLeft = this.elementRef.nativeElement.offsetLeft;
      // 移動量加上原本的寬度
      switch (this.direction) {
        case DragDirection.LeftTop:
          this.myTop = domTop + y;
          this.myHeight = domHeight - y;
          this.myLeft = domLeft + x;
          this.myWidth = domWidth - x;
          break;
        case DragDirection.LeftBottom:
          this.myHeight = domHeight + y;
          this.myLeft = domLeft + x;
          this.myWidth = domWidth - x;
          break;
        case DragDirection.Left:
          this.myLeft = domLeft + x;
          this.myWidth = domWidth - x;
          break;
        case DragDirection.RightTop:
          this.myTop = domTop + y;
          this.myHeight = domHeight - y;
          this.myWidth = domWidth + x;
          break;
        case DragDirection.RightBottom:
          this.myWidth = domWidth + x;
          this.myHeight = domHeight + y;
          break;
        case DragDirection.Right:
          this.myWidth = domWidth + x;
          break;
        case DragDirection.Top:
          this.myTop = domTop + y;
          this.myHeight = domHeight - y;
          break;
        case DragDirection.Bottom:
          this.myHeight = domHeight + y;
          break;
      }
=======
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
>>>>>>> 9b2d6aff19b1a99b4f372e6981edfaffdcebd369
    }
    this.lastX = e.clientX;
    this.lastY = e.clientY;
  }

  @HostListener('document:mouseup', ['$event']) resizeStop() {
    this.isResizing = false;
    this.isDragging = false;
  }

  preventDefault(e: MouseEvent) {
<<<<<<< HEAD
    this.direction = DragDirection.Default;
    e.preventDefault();
    e.stopPropagation();
    console.log('preventDefault')
=======
    if (!this.isResizing) {
      this.direction = DragDirection.Default;
      e.stopPropagation();
    }
  }

  setX(left: number, width: number) {
    const maxRight = this.elementRef.nativeElement.parentElement.offsetWidth;
    const canSetLeft = this.myLeft + left > 0 && this.myLeft + left + this.myWidth < maxRight;
    const canSetWidth = this.myWidth + width > this.minWidth && this.myWidth + this.myLeft + width < maxRight;
    if (canSetLeft && canSetWidth) {
      this.myLeft += left;
      this.myWidth += width;
    }
>>>>>>> 9b2d6aff19b1a99b4f372e6981edfaffdcebd369
  }

  setY(top: number, height: number) {
    const maxBottom = this.elementRef.nativeElement.parentElement.offsetHeight;
    const canSetTop = this.myTop + top > 0 && this.myTop + top + this.myHeight < maxBottom;
    const canSetHeight = this.myHeight + height > this.minHeight && this.myHeight + this.myTop + height < maxBottom;
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
}
