import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';

@Component({
  selector: 'appHeroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() {}

  ngOnInit() {}
}
