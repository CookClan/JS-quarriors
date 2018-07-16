import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameServiceService } from '../app/shared/services/game-service.service';
import { Wilds } from '../app/shared/models/wilds';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './quarriors.component.html',
  styleUrls: ['./quarriors.component.css']
})
export class QuarriorsComponent implements OnInit, OnDestroy {
  title = 'quarriors';
  wilds: Wilds;
  navigationSubscription: any;
  constructor(private gameServiceService: GameServiceService, router: Router) {
   // subscribe to the router events - storing the subscription so
   // we can unsubscribe later.
   this.navigationSubscription = router.events.subscribe((e: any) => {
     // If it is a NavigationEnd event re-initalise the component
     if (e instanceof NavigationEnd && this.wilds) {
      this.ngOnInit();
     }
   });
  }
  ngOnInit(): void {
    this.wilds = this.gameServiceService.createWilds();
  }
  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
