import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { ProgramsComponent } from './component/programs/programs.component';
import { WindowsComponent } from './component/windows/windows.component';
import { FolderComponent } from './application/folder/folder.component';
import { ArrowComponent } from './component/arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProgramsComponent,
    WindowsComponent,
    FolderComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
