import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UtenteService} from "./utente.service";
import {HttpClientModule} from "@angular/common/http";
import {DbMockService} from "./db-mock.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UtenteService, DbMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
