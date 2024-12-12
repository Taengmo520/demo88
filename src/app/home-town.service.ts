import { Injectable } from '@angular/core';
import { Home } from './home/home.service';

export const HomeTown: Home[]=[
  {home_code:12,home_name:'Narco'},
  {home_code:13,home_name:'Bombasto'},
  {home_code:14,home_name:'Celaritas'},
  {home_code:11,home_name:'Dr Nice'},
  {home_code:15,home_name:'Magneta'},
  {home_code:16,home_name:'RubberMan'},
  {home_code:17,home_name:'Dynama'},
  {home_code:18,home_name:'Dr IQ'},
  {home_code:19,home_name:'Magma'},
  {home_code:20,home_name:'Tornado'},
]

@Injectable({
  providedIn: 'root'
})
export class HomeTownService {
static home_coed: any;
static home_name: any;

  constructor() { }
}
