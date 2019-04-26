import { Component, OnInit, Type, HostListener } from '@angular/core';

interface Folder {
  path: string;
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
  folderMap: Folder[] = [
    {
      path: '電腦',
      icon: '',
      directory: [
        {
          path: 'C:',
          icon: '',
          directory: [
            {
              path: 'Program Files',
              icon: '',
              directory: []
            },
            {
              path: '使用者',
              icon: '',
              directory: []
            },
          ]
        },
      ],
    }
  ];
  // fullPathList: string[] = [this.folderMap[0].path];
  fullPathList: string[] = ['電腦', 'C:', 'Program Files'];
  urlText = '';

  ngOnInit() {
    this.getUrlText();
  }

  getUrlText(folderMap: Folder[] = this.folderMap, index: number = 0) {
    const thisPath = folderMap.find((folder: Folder) => folder.path === this.fullPathList[index]);
    if (this.urlText === '電腦') {
      this.urlText = thisPath.path;
    } else {
      this.urlText += (this.urlText) ? '\\' + thisPath.path : thisPath.path;
    }
    if (this.fullPathList.length > index + 1) {
      this.getUrlText(thisPath.directory, index + 1);
    }
  }

  setFocuse() {
    this.focusePath = true;
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
