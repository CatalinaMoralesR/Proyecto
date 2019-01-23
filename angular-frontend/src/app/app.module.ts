import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { FormsModule } from '@angular/forms';


import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdeaEditComponent } from './idea-edit/idea-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DesafioListComponent } from './desafio-list/desafio-list.component';
import { DesafioEditComponent } from './desafio-edit/desafio-edit.component';
import { IdeaShowComponent } from './idea-show/idea-show.component';
import { DesafioShowComponent } from './desafio-show/desafio-show.component';
import { HomeComponent } from './home/home.component';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioAddComponent } from './comentario-add/comentario-add.component';
import { UsuarioShowComponent } from './usuario-show/usuario-show.component';
import { IdeaEditrealComponent } from './idea-editreal/idea-editreal.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaEditComponent,
    NavbarComponent,
    DesafioListComponent,
    DesafioEditComponent,
    IdeaShowComponent,
    DesafioShowComponent,
    HomeComponent,
    ComentarioListComponent,
    ComentarioAddComponent,
    UsuarioShowComponent,
    IdeaEditrealComponent
  ],
 imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

