import { Component, OnInit, Input} from '@angular/core';
import { Home } from '../home/home.service';
import { HomeTown } from '../home-town.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  @Input() home1?:Home;

  selectHome?: Home;

  constructor() { }

  ngOnInit(): void {
  }

  homes = HomeTown;
  selectedHome? : Home;

}
