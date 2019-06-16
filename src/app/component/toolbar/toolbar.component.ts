import { Component, OnInit } from '@angular/core';
import { ApplicationService } from 'src/app/service/application/application.service';
import { Application } from 'src/app/service/application/application';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  readonly defaultList: Application[] = [
    Application.Folder,
    // Application.IE,
    // Application.Player,
    // Application.Chrome,
    // Application.Line,
  ];
  appList: Application[] = this.defaultList;
  proccess: Application[] = [];
  openPrograms = false;

  constructor(
    private appService: ApplicationService
  ) {
    appService.getApplication().subscribe((proccessList: Application[]) => {
      // 複製陣列 直接等號會有指向的修改問題
      this.appList = this.defaultList.concat();
      this.proccess = proccessList;
      proccessList.forEach((proccess: Application) => {
        // 在proccess中的不是預設顯示項目  要加到工具列
        const has = this.appList.find((app: Application) => app === proccess);
        if (!has) {
          this.appList.push(proccess);
        }
      });
    });
  }

  ngOnInit() {
  }

  toggleApp(app: Application) {
    this.appService.clickApp(app);
  }

  isOpen(app: Application) {
    return this.proccess.find((item) => item === app);
  }

  toggleProgrames() {
    this.openPrograms = !this.openPrograms;
  }

}
