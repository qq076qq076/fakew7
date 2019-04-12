import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'start';
  starting = true;

  constructor() {
    setTimeout(() => {
      this.starting = false;
    }, 4800);
  }
}
