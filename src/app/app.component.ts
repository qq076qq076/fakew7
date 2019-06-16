import { Component, OnInit, NgZone } from '@angular/core';
import { ApplicationService } from './service/application/application.service';
import { Application } from './service/application/application';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'start';
  starting = false;
  proccessList: Application[];

  constructor(
    private applicationService: ApplicationService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.starting = true;
    }, 4800);

    this.applicationService.getApplication()
      .subscribe((appList: Application[]) => {
        this.proccessList = appList;
      });
  }
}
