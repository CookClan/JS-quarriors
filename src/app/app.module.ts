import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DieSideComponent } from './die-side/die-side.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    DieSideComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
