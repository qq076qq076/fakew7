import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  myName = LineComponent.appName;
  myImg = LineComponent.appImg;
  isMax = false;
  @Input() zIndex: number;
  @Input() isMin = false;
  @Output() setMin = new EventEmitter<boolean>();
  @Output() setClose = new EventEmitter<{}>();
  minWidth = 300;
  minHeight = 453;
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

}
