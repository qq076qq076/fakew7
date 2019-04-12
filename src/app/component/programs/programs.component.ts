import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  @HostBinding('class.open') open: boolean;
  @Input()
  set isOpen(open: boolean) {
    this.open = open;
  }


  constructor() { }

  ngOnInit() {
  }

}
