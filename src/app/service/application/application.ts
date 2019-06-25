import { FolderComponent } from 'src/app/application/folder/folder.component';
import { Windows } from 'src/app/component/windows/windows.component';
import { NotepadComponent } from 'src/app/application/notepad/notepad.component';
import { LineComponent } from 'src/app/application/line/line.component';

export class Application {
  static Folder = new Application(FolderComponent);
  // static IE = new Application('assets/images/ie-icon.png');
  // static Player = new Application('assets/images/player-icon.png');
  // static Chrome = new Application('assets/images/chrome-icon.png');
  // static Line = new Application('assets/images/line-icon.png');
  static NotePad = new Application(NotepadComponent);
  static Line = new Application(LineComponent);

  constructor(
    public component?: Windows | any,
    public isHidden = false,
    public zIndex = 0,
  ) { }
}
