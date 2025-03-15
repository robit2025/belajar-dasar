import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app1/inbox',
    pathMatch: 'full',
  },
  {
    path: 'app1',
    redirectTo: 'app1/inbox',
    pathMatch: 'full',
  },
  {
    path: 'app2',
    redirectTo: 'app2/inbox',
    pathMatch: 'full',
  },
  {
    path: 'app1/:id',
    loadComponent: () =>
      import('./app1/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'app2/:id',
    loadComponent: () =>
      import('./app2/folder.page').then((m) => m.FolderPage),
  },
];
