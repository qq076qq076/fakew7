import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Windows } from 'src/app/component/windows/windows.component';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit, Windows {
  static appName = '記事本';
  static appImg = 'assets/images/notepad.ico';
  myName = NotepadComponent.appName;
  myImg = NotepadComponent.appImg;

  @Input() isMin = false;
  @Input() zIndex: number;
  @Output() setMin = new EventEmitter<boolean>();
  @Output() setClose = new EventEmitter<{}>();
  isMax = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMax() {
    this.isMax = !this.isMax;
  }

  toggleMin(isMin?: boolean) {
    this.setMin.emit(isMin);
  }

  toggleClose() {
    this.setClose.emit();
  }
}
