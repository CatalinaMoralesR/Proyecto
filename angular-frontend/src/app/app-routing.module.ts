import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaEditComponent } from './idea-edit/idea-edit.component';
import { DesafioListComponent } from './desafio-list/desafio-list.component';
import { DesafioEditComponent } from './desafio-edit/desafio-edit.component';
import {IdeaShowComponent} from './idea-show/idea-show.component';
import {DesafioShowComponent} from './desafio-show/desafio-show.component';
import {HomeComponent} from './home/home.component';
import {ComentarioListComponent} from './comentario-list/comentario-list.component';
import {ComentarioAddComponent} from './comentario-add/comentario-add.component';
import {UsuarioShowComponent} from './usuario-show/usuario-show.component';
import {IdeaEditrealComponent} from './idea-editreal/idea-editreal.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
  },
  {
    path: 'idea-show/:id',
    component: IdeaShowComponent
  },
  {
    path: 'desafio-show/:id',
    component: DesafioShowComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'comentario-list',
    component: ComentarioListComponent
  },
  {
  path: 'comentario-add',
  component: ComentarioAddComponent
},
  {
    path: 'usuario-show',
    component: UsuarioShowComponent
  },
  {
    path: 'idea-editreal',
    component: IdeaEditrealComponent
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
