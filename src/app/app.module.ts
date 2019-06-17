import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { ProgramsComponent } from './component/programs/programs.component';
import { WindowsComponent } from './component/windows/windows.component';
import { FolderComponent } from './application/folder/folder.component';
import { ArrowComponent } from './component/arrow/arrow.component';
import { NotepadComponent } from './application/notepad/notepad.component';
import { EntryComponent } from './component/entry/entry.component';
import { LineComponent } from './application/line/line.component';
import { DraggableDirective } from './directive/draggable/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProgramsComponent,
    WindowsComponent,
    FolderComponent,
    ArrowComponent,
    NotepadComponent,
    EntryComponent,
    LineComponent,
    DraggableDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NotepadComponent,
    FolderComponent,
    LineComponent,
  ]
})
export class AppModule { }
