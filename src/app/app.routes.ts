import { Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'user/user-list',
    component: UserListComponent,
    title: 'User list'
  },
  {
    path: 'user/user-form/:id',
    component: UserFormComponent,
    title: 'User form'
  },
  {
    path: '',
    redirectTo: 'user/user-list',
    pathMatch: 'full'
    
  },
  {
    path: '**',
    redirectTo: 'user/user-list',
    pathMatch: 'full',
  }
];
