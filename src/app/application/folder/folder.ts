import { Type } from '@angular/core';

export interface Folder {
  path: string;
  name: string;
  icon: string;
  component?: Type<any>;
  directory: Folder[];
}

export const ProgramFiles: Folder = {
  path: '電腦\\本機磁碟(C:)\\Program Files',
  name: 'Program Files',
  icon: 'assets/images/folder.ico',
  directory: []
};

export const UserFolder: Folder = {
  path: '電腦\\本機磁碟(C:)\\使用者',
  name: '使用者',
  icon: 'assets/images/user folder.ico',
  directory: []
};

export const C: Folder = {
  name: '本機磁碟(C:)',
  path: '電腦\\本機磁碟(C:)',
  icon: 'assets/images/d.ico',
  directory: [
    ProgramFiles,
    UserFolder,
  ],
};

export const D: Folder = {
  path: '電腦\\固態硬碟(D:)',
  name: '固態硬碟(D:)',
  icon: 'assets/images/d.ico',
  directory: []
};

export const Computer: Folder = {
  path: '電腦',
  name: '電腦',
  icon: 'assets/images/computer.ico',
  directory: [
    C,
    D
  ],
};

export const FolderMap: Folder[] = [
  Computer
];
