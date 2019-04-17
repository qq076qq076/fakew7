import { Component, ElementRef, HostListener, HostBinding } from '@angular/core';
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
    this.elementNative = elementRef.nativeElement;
  }
  name = 'Windows Internet Explorer';
  logo = '/assets/images/ie-icon.png';
  direction: DragDirection;
  startX = 0;
  startY = 0;
  boundary = 15;
  elementNative: HTMLElement;
  resizing = false;

  // @HostBinding('style')
  // get cursor() {
  //   const cursor = this.direction ? this.direction.cursor : 'default';
  //   return this.sanitizer.bypassSecurityTrustStyle(`cursor: ${cursor};`);
  // }
  // @HostListener('mouseover', ['$event']) onmouseover(e: MouseEvent) {
  //   console.log('mouseover')
  //   const width = this.elementNative.offsetWidth;
  //   const height = this.elementNative.offsetHeight;
  //   const cursorX = Math.min(Math.max(e.offsetX, 0), width);
  //   const cursorY = Math.min(Math.max(e.offsetY, 0), height);
  //   if (this.resizing) {
  //     return false;
  //   }
  //   if (cursorX < this.boundary) {
  //     if (cursorY < this.boundary) {
  //       this.direction = DragDirection.LeftTop;
  //     } else if (height - cursorY < this.boundary) {
  //       this.direction = DragDirection.LeftBottom;
  //     } else {
  //       this.direction = DragDirection.Left;
  //     }
  //   } else if (width - cursorX < this.boundary) {
  //     if (cursorY < this.boundary) {
  //       this.direction = DragDirection.RightTop;
  //     } else if (height - cursorY < this.boundary) {
  //       this.direction = DragDirection.RightBottom;
  //     } else {
  //       this.direction = DragDirection.Right;
  //     }
  //   } else {
  //     this.direction = (cursorY < this.boundary) ? DragDirection.Top : DragDirection.Bottom;
  //   }
  // }

  // @HostListener('mousedown', ['$event']) resizeStart(e) {
  //   this.resizing = true;
  //   this.startX = e.clientX - e.target.offsetLeft;
  //   this.startY = e.clientY - e.target.offsetHeight;
  //   console.log(this.startX)
  // }

  // @HostListener('document:mouseover') resize() {

  // }

  // @HostListener('document:mouseup', ['$event']) resizeStop() {
  //   this.startX = 0;
  //   this.startY = 0;
  //   this.resizing = false;
  // }

  // preventDefault(e: MouseEvent) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   this.direction = undefined;
  // }

  console(event) {
    console.log('event:' + event)
  }

}
