import { Component, OnInit } from '@angular/core';
import { ApplicationService, IApplication } from 'src/app/service/application/application.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  appList: IApplication[] = [];

  constructor(
    private appService: ApplicationService
  ) {
    appService.getApplication().subscribe((appList: IApplication[]) => {
      this.appList = appList;
    });
  }

  ngOnInit() {
  }

  toggleApp(app: IApplication) {

  }

}
