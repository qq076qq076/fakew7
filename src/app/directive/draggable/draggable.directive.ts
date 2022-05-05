import { Directive, Input, HostBinding, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit, AfterViewInit {
  constructor(
    public elementRef: ElementRef,
    public sanitizer: DomSanitizer,
  ) { }
  @ViewChild('drag', { read: ElementRef, static: false }) dragRef: ElementRef;
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

  _minWidth: number;
  _minHeight: number;
  lastX = 0;
  lastY = 0;
  myTop = 50;
  myLeft = 50;
  myWidth: number;
  myHeight: number;
  isDragging = false;

  @HostBinding('style')
  get style() {
    const top = this.myTop ? this.myTop + 'px' : 'auto';
    const left = this.myLeft ? this.myLeft + 'px' : 'auto';
    return this.sanitizer.bypassSecurityTrustStyle(`
      top: ${top};
      left: ${left};
      position: absolute;
    `);
  }

  @HostListener('mousedown', ['$event']) start(e: MouseEvent) {
    if (!this.dragRef) {
      this.lastX = e.clientX;
      this.lastY = e.clientY;
      this.isDragging = true;
    }
  }

  @HostListener('document:mousemove', ['$event']) drag(e: MouseEvent) {
    const x = e.clientX - this.lastX;
    const y = e.clientY - this.lastY;
    if (this.isDragging) {
      this.dragging(x, y);
    }
    this.lastX = e.clientX;
    this.lastY = e.clientY;
  }

  @HostListener('document:mouseup', ['$event']) stop() {
    this.isDragging = false;
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.myWidth = this._minWidth;
    this.myHeight = this._minHeight;
    if (this.dragRef) {
      const nativeElement = this.dragRef.nativeElement;
      nativeElement.addEventListener('click', (e: MouseEvent) => {
        this.lastX = e.clientX;
        this.lastY = e.clientY;
        this.isDragging = true;
      });
    }
  }

  dragging(x: number, y: number) {
    this.setX(x, 0);
    this.setY(y, 0);
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
}
