import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IApplication {
  name: string;
  img: string;
  isOpen: boolean;
  zIndex?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private applicationList: IApplication[] = [
    {
      name: 'ie',
      img: '/assets/images/ie-icon.png',
      isOpen: false,
    },
    {
      name: 'ie',
      img: '/assets/images/player-icon.png',
      isOpen: false,
    },
    {
      name: 'ie',
      img: '/assets/images/chrome-icon.png',
      isOpen: false,
    },
    {
      name: 'ie',
      img: '/assets/images/line-icon.png',
      isOpen: false,
    },
  ];

  private applicationSubject = new BehaviorSubject<IApplication[]>(this.applicationList);
  constructor() { }

  getApplication(): Observable<IApplication[]> {
    return this.applicationSubject;
  }
}
