import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { ProgramsComponent } from './component/programs/programs.component';
import { WindowsComponent } from './component/windows/windows.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProgramsComponent,
    WindowsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
