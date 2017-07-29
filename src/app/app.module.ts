import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
// import appRoutes from './app.routes';
import { Routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WinesComponent } from './wines/wines.component';
import { AddWineComponent } from './add-wine/add-wine.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WinesComponent,
    AddWineComponent
  ],
  imports: [
    BrowserModule,
    Routing
    // appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
