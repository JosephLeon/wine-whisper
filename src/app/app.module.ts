import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WinesComponent } from './wines/wines.component';
import { AddWineComponent } from './add-wine/add-wine.component';
import { WineComponent } from './wine/wine.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WinesComponent,
    AddWineComponent,
    WineComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
