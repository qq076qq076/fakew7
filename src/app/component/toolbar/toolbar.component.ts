import { Component, OnInit } from '@angular/core';
import { ApplicationService, IApplication } from 'src/app/service/application/application.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  appList: IApplication[] = [];
  openPrograms = false;

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
    console.log(app)
    this.appService.clickApp(app);
  }

  toggleProgrames() {
    this.openPrograms = !this.openPrograms;
    console.log(this.openPrograms)
  }

}
