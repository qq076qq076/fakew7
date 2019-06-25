import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applicationList: Application[] = [];

  private applicationSubject = new BehaviorSubject<Application[]>(this.applicationList);
  private topIndex = 1;
  constructor() { }

  getApplication(): Observable<Application[]> {
    return this.applicationSubject;
  }

  clickApp(app: Application, setTop?: boolean) {
    // 檢查是否已經開啟
    const index = this.applicationList.findIndex((appIteem: Application) => appIteem.component.appName === app.component.appName);
    if (index !== -1) {
      if (this.applicationList[index].isHidden || setTop) {
        // 是最小化  打開
        this.topIndex += 1;
        app.isHidden = false;
        app.zIndex = this.topIndex;
      } else if (app.zIndex === this.topIndex) {
        // 是在最上層  最小化
        app.isHidden = true;
      } else {
        // 打開但不在最上層 移動到最上層
        this.topIndex += 1;
        app.zIndex = this.topIndex;
      }
    } else {
      this.topIndex += 1;
      app.zIndex = this.topIndex;
      this.applicationList.unshift(app);
    }
    // this.applicationList.unshift(app);
    this.applicationSubject.next(this.applicationList);
  }

  closeApp(component) {
    const index = this.applicationList.findIndex((appIteem: Application) => appIteem.component.appName === component.appName);
    this.applicationList.splice(index, 1);
    this.applicationSubject.next(this.applicationList);
  }

  setHidden(component, isHidden: boolean) {
    const comp = this.applicationList.find((appIteem: Application) => appIteem.component.appName === component.appName);
    comp.isHidden = isHidden;
    this.applicationSubject.next(this.applicationList);
  }

}
