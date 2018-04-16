import { Injectable } from '@angular/core';
import { Wilds } from '../models/wilds';

@Injectable()
export class GameServiceService {

  constructor() { }

  private wilds: Wilds;
  createWilds() {
    this.wilds = new Wilds();
    return this.wilds;
  }

}
