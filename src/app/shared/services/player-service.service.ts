import { Injectable } from '@angular/core';

@Injectable()
export class PlayerServiceService {

  constructor() { }

  private players: Player[];
  addPlayer(): Player {
    Player.append(new Player(playerNum = Player.length));
  }

}
