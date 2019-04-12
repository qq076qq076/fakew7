import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit {
  constructor() { }
  name = 'Windows Internet Explorer';
  logo = '/assets/images/ie-icon.png';

  ngOnInit() {
  }

}
