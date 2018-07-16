import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuarriorsComponent } from '../quarriors/quarriors.component';
import { DieSideComponent } from './die-side/die-side.component';
import { CardComponent } from './card/card.component';
import { GameServiceService } from './shared/services/game-service.service';

const appRoutes: Routes = [
  { path: 'game', component: QuarriorsComponent, runGuardsAndResolvers: 'always' }
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
      appRoutes, {onSameUrlNavigation: 'reload'}),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [GameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

