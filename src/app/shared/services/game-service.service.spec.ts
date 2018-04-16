import { TestBed, inject } from '@angular/core/testing';

import { GameServiceService } from './game-service.service';

describe('GameServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameServiceService]
    });
  });

  it('should be created', inject([GameServiceService], (service: GameServiceService) => {
    expect(service).toBeTruthy();
  }));
  it('should create the basic wilds', inject([GameServiceService], (service: GameServiceService) => {
    let Wilds = service.createWilds();
    expect(basicWilds).toBeTruthy();
  }));
});
