import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaEditComponent } from './idea-edit/idea-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/idea-list', pathMatch: 'full' },
  {
    path: 'idea-list',
    component: IdeaListComponent
  },
  {
    path: 'idea-add',
    component: IdeaEditComponent
  },
  {
    path: 'idea-edit/:idNumber',
    component: IdeaEditComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
