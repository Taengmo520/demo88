import { TestBed } from '@angular/core/testing';
import { Home, HomeService } from './home.service';
import { HomeTown } from '../home-town.service';


describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
