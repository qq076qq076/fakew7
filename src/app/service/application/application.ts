import { FolderComponent } from 'src/app/application/folder/folder.component';
import { Windows } from 'src/app/component/windows/windows.component';
import { NotepadComponent } from 'src/app/application/notepad/notepad.component';

export class Application {
  static Folder = new Application(FolderComponent);
  // static IE = new Application('assets/images/ie-icon.png');
  // static Player = new Application('assets/images/player-icon.png');
  // static Chrome = new Application('assets/images/chrome-icon.png');
  // static Line = new Application('assets/images/line-icon.png');
  static NotePad = new Application(NotepadComponent);

  constructor(
    public component?: Windows | any,
    public isHidden = false,
  ) { }
}
