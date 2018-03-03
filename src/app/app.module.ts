import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DiceSideComponent } from './dice-side/dice-side.component';

const appRoutes: Routes = [
  { path: 'quarriors', component: QuarriorsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DiceSideComponent
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

