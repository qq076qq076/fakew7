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
  boundary = 15;
  lastX = 0;
  lastY = 0;
  myTop = 50;
  myLeft = 50;
  myHeight = 300;
  myWidth = 300;
  resizing = false;

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
    if (this.resizing) {
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

  @HostListener('mousedown', ['$event']) resizeStart(e) {
    this.lastX = e.clientX;
    this.lastY = e.clientY;
    this.resizing = true;
  }

  @HostListener('document:mousemove', ['$event']) resize(e: MouseEvent) {
    if (this.resizing) {
      const x = e.clientX - this.lastX;
      const y = e.clientY - this.lastY;
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
      this.lastX = e.clientX;
      this.lastY = e.clientY;
    }
  }

  @HostListener('document:mouseup', ['$event']) resizeStop() {
    this.resizing = false;
  }

  preventDefault(e: MouseEvent) {
    if (!this.resizing) {
      this.direction = DragDirection.Default;
      e.stopPropagation();
    }
  }

}
