import { Component, OnInit, Type } from '@angular/core';

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
  urlText = 'C:\\';
  focusePath = false;
  fullPath = '\\';
  folderMap: Folder = {
    path: '\\',
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
  };

  ngOnInit() {
  }

}
