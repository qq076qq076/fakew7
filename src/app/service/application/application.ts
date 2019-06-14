import { FolderComponent } from 'src/app/application/folder/folder.component';
import { Windows } from 'src/app/component/windows/windows.component';

export class Application {
  static Folder = new Application('assets/images/folder-icon.png', FolderComponent);
  static IE = new Application('assets/images/ie-icon.png');
  static Player = new Application('assets/images/player-icon.png');
  static Chrome = new Application('assets/images/chrome-icon.png');
  static Line = new Application('assets/images/line-icon.png');

  constructor(
    public img: string,
    public component?: Windows | any,
    public isHidden = false,
  ) { }
}
