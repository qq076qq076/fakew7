import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { ApplicationService } from 'src/app/service/application/application.service';
import { Application } from 'src/app/service/application/application';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  @HostBinding('class.open') open: boolean;
  @Output() toggleProgrames = new EventEmitter();
  @Input()
  set isOpen(open: boolean) {
    this.open = open;
  }

  appList: Application[] = [];

  rightList = [
    {
      name: 'Guest',
    },
    {
      name: '文件',
    },
    {
      name: '圖片',
    },
    {
      name: '音樂',
    },
    {
      name: '電腦',
    },
  ]

  constructor(
    private appService: ApplicationService
  ) {
    appService.getApplication().subscribe((appList: Application[]) => {
      this.appList = appList;
    });
  }

  ngOnInit() {
  }

  close() {
    this.toggleProgrames.emit();
  }

}
