import { TestBed, inject } from '@angular/core/testing';

import { GameServiceService } from './player-service.service';

describe('PlayerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerServiceService]
    });
  });

  it('should be created', inject([PlayerServiceService], (service: PlayerServiceService) => {
    expect(service).toBeTruthy();
  }));
  it('should create player1', inject([PlayerServiceService], (service: PlayerServiceService) => {
    const player1 = service.createPlayer();
    expect(player1).toBeTruthy();
  }));
});
