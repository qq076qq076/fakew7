import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  Input,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Windows } from '../windows/windows.component';
import { Application } from 'src/app/service/application/application';
import { ApplicationService } from 'src/app/service/application/application.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('appHost', { read: ViewContainerRef }) appHost: ViewContainerRef;
  @Input() app: Application;
  @Input() isHidden: boolean;

  componentRef: ComponentRef<Windows>;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private proccessService: ApplicationService,
  ) { }

  ngOnInit() {
    const component = this.app.component;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<Windows>(component);
    this.appHost.clear();
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    const comInstance = this.componentRef.instance;
    comInstance.setMin.subscribe((isHidden: boolean) => {
      this.proccessService.setHidden(component, !isHidden);
    });
    comInstance.setClose.subscribe(() => {
      this.proccessService.closeApp(component)
    });
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.changeDetectorRef.detach();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.componentRef && changes.isHidden) {
      this.componentRef.instance.isMin = changes.isHidden.currentValue;
    }
  }
}
