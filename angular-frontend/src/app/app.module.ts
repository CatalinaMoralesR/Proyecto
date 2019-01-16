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

@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaEditComponent,
    NavbarComponent,
    DesafioListComponent,
    DesafioEditComponent
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

