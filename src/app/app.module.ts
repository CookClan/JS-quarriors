import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuarriorsComponent } from '../quarriors/quarriors.component';
import { DieSideComponent } from './die-side/die-side.component';
import { CardComponent } from './card/card.component';

const appRoutes: Routes = [
  { path: 'quarriors', component: QuarriorsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuarriorsComponent,
    DieSideComponent,
    CardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

