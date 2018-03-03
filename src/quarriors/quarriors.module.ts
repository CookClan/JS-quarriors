import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuarriorsComponent } from './quarriors.component';


@NgModule({
  declarations: [
    QuarriorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [QuarriorsComponent]
})
export class QuarriorsModule { }

