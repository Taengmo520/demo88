import { Component, OnInit } from '@angular/core';
import { Home, HomeService } from './home.service';
import { HomeTown } from '../home-town.service';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home2: Home[] = [];
  title = 'SoftSqure';

  home: Home ={
    home_code: 1,
    home_name: 'Team DotNet'
  };

  homes = HomeTown;
  selectedHome?: Home;

  constructor(
    private homeservice:HomeService,
    private messageService:MessageService
  ) { }

  ngOnInit(): void {
      this.getHome();
  }

  onSelect(home: Home): void {
    this.selectedHome = home;
    this.messageService.add(`HeroesComponent: Selected hero id=${home.home_code}`);
  } 

  getHome(): void {
    // this.home2 = this.homeservice.getHome();
    this.homeservice.getHome()
      .subscribe(home => this.home2 = home)
      console.log(this.home2)
  }
}
