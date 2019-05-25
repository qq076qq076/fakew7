import { Component, OnInit, Type, HostListener } from '@angular/core';

interface Folder {
  path: string;
  name: string;
  icon: string;
  component?: Type<any>;
  directory: Folder[];
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  constructor() { }
  focusePath = false;
  readonly folderMap: Folder[] = [
    {
      path: '電腦',
      name: '電腦',
      icon: 'assets/images/computer.ico',
      directory: [
        {
          name: '本機磁碟(C:)',
          path: '電腦\\本機磁碟(C:)',
          icon: 'assets/images/d.ico',
          directory: [
            {
              path: '電腦\\本機磁碟(C:)\\Program Files',
              name: 'Program Files',
              icon: 'assets/images/folder.ico',
              directory: []
            },
            {
              path: '電腦\\本機磁碟(C:)\\使用者',
              name: '使用者',
              icon: 'assets/images/user folder.ico',
              directory: []
            },
          ]
        },
        {
          path: '電腦\\固態硬碟(D:)',
          name: '固態硬碟(D:)',
          icon: 'assets/images/d.ico',
          directory: []
        }
      ],
    }
  ];
  readonly emptyFolder: Folder = {
    path: '',
    name: '',
    icon: '',
    directory: []
  };
  currentFolder: Folder = this.folderMap[0];
  pathInput: string = this.currentFolder.path;
  active;

  ngOnInit() {
  }

  getUrlList() {
    return this.currentFolder.path.split('\\').filter(item => item);
  }

  searchPath() {
    this.focusePath = false;
    const folder = this.deepSearch(this.pathInput);
    this.currentFolder = folder || this.emptyFolder;
  }

  console() { console.log(this.pathInput) }

  toggle(folder: Folder) {
    this.currentFolder = folder;
    this.pathInput = folder.path;
  }

  toLast() {
    const pathList = this.currentFolder.path.split('\\');
    pathList.pop();
    const folder = this.deepSearch(pathList.join('\\'));
    if (folder) {
      this.currentFolder = folder;
    } else {
      this.currentFolder = this.folderMap[0];
    }
  }

  searchFolder() {

  }

  deepSearch(path: string, folderList: Folder[] = this.folderMap): Folder | null {
    for (const folder of folderList) {
      if (path === folder.path) {
        return folder;
      } else if (path.indexOf(folder.path) !== -1) {
        return this.deepSearch(path, folder.directory);
      } else {
        return null;
      }
    }
  }

  stopPropagation(e: MouseEvent) {
    e.stopPropagation();
  }

  @HostListener('document:click') setUnFocus() {
    if (this.focusePath) {
      this.focusePath = false;
    }
  }
}
