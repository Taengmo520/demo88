import { Injectable } from '@angular/core';
import { HomeTown } from '../home-town.service';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages/message.service';


export interface Home {
  home_code: number;
  home_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private messageService: MessageService) { }

  getHome(): Observable<Home[]> {
    const home = of(HomeTown);
    this.messageService.add('HomeService: fetched home');
    return home;
  }
}
