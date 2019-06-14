import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applicationList: Application[] = [];

  private applicationSubject = new BehaviorSubject<Application[]>(this.applicationList);
  constructor() { }

  getApplication(): Observable<Application[]> {
    return this.applicationSubject;
  }

  clickApp(app: Application, setTop?: boolean) {
    // 檢查是否已經開啟
    const index = this.applicationList.findIndex((appIteem: Application) => appIteem.component === app.component);
    if (index !== -1) {
      if (this.applicationList[index].isHidden || setTop) {
        // 是最小化  打開
        this.applicationList.splice(index, 1);
        app.isHidden = false;
      } else if (index === 0) {
        // 是在最上層  最小化
        this.applicationList.splice(index, 1);
        app.isHidden = true;
      }
    }
    this.applicationList.unshift(app);
    this.applicationSubject.next(this.applicationList);
  }

  closeApp(component) {
    const index = this.applicationList.findIndex((appIteem: Application) => appIteem.component === component);
    this.applicationList.splice(index, 1);
    this.applicationSubject.next(this.applicationList);
  }

  setHidden(component, isHidden: boolean) {
    const comp = this.applicationList.find((appIteem: Application) => appIteem.component === component);
    comp.isHidden = isHidden;
    this.applicationSubject.next(this.applicationList);
  }

}
