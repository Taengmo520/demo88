import { TestBed } from '@angular/core/testing';

import { HomeTownService } from './home-town.service';

describe('HomeTownService', () => {
  let service: HomeTownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeTownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
