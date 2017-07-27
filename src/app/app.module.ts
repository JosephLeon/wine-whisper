import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import appRoutes from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WinesComponent } from './wines/wines.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WinesComponent
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
