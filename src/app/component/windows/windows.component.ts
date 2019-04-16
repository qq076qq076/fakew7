import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef
  ) { }
  name = 'Windows Internet Explorer';
  logo = '/assets/images/ie-icon.png';

  @ViewChild('border-container') borderContainer: ElementRef;

  ngAfterViewInit() {
    // this.resizeRef = this.elementRef.nativeElement.querySelector('.border-container');
    // console.log(this.resizeRef);
  }

  changeCursor(e) {
    // let width = this.borderContainer.offsetWidth;
    console.log(width)
  }

}
