import { Injectable } from '@angular/core';
import { Wilds } from '../models/wilds';

@Injectable()
export class GameServiceService {

  constructor() { 

  }

  function createWilds() {
    this.wilds = Wilds();
    return wilds;
  }
  private wilds: Wilds;
}
