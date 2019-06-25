import { Component, OnInit, Output, EventEmitter, Input, HostBinding } from '@angular/core';
import { Windows } from 'src/app/component/windows/windows.component';
import { DraggableDirective } from 'src/app/directive/draggable/draggable.directive';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent extends DraggableDirective implements OnInit, Windows {
  static appName = 'Line';
  static appImg = 'assets/images/line-icon.png';
  @Input() zIndex: number;
  @Input() isMin = false;
  @Output() setMin = new EventEmitter<boolean>();
  @Output() setClose = new EventEmitter<{}>();
  myName = LineComponent.appName;
  myImg = LineComponent.appImg;
  isMax = false;
  minWidth = 300;
  minHeight = 465;
  tab = 0;
  error: string;
  @HostBinding('class') get classes() {
    return this.isMin ? 'hide' : '';
  }

  // @HostBinding('style.zIndex') get styles() {
  //   return 300 + this.zIndex;
  // }

  ngOnInit() {
  }

  toggleMax() {

  }

  toggleMin(isMin?: boolean) {
    this.setMin.emit(isMin);
  }

  toggleClose() {
    this.setClose.emit();
  }

  login() {
    this.error = '因網路問題導致登入失敗，請先確認網路狀態後，在式一次。';
  }
}
