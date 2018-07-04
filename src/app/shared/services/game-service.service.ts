import { Injectable } from '@angular/core';
import { Wilds } from '../models/wilds';
import { PlayerServiceService } from './player-service.service';

@Injectable()
export class GameServiceService {

  constructor(private playerService: PlayerServiceService) { }

  private wilds: Wilds;
  createWilds() {
    this.wilds = new Wilds();
    return this.wilds;
  }
  addPlayer(): void {
    this.playerService.addPlayer();
  }
  

}
