import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaEditComponent } from './idea-edit/idea-edit.component';
import { DesafioListComponent } from './desafio-list/desafio-list.component';
import { DesafioEditComponent } from './desafio-edit/desafio-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'idea-list',
    component: IdeaListComponent
  },
  {
    path: 'desafio-list',
    component: DesafioListComponent
  },
  {
    path: 'idea-add',
    component: IdeaEditComponent
  },
  {
    path: 'desafio-add',
    component: DesafioEditComponent
  },
  {
    path: 'idea-edit/:idNumber',
    component: IdeaEditComponent
  },
  {
    path: 'desafio-edit/:idNumber',
    component: DesafioEditComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
