import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

import {HeroDetailComponent} from './hero-detail.component';
import {CrisisListComponent}   from './crisis-list.component';
import {HeroListComponent}     from './hero-list.component';

@Component({
    selector: 'my-app',
    template: ` <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>

              <h1>Component Router</h1>
              <a [routerLink]="['CrisisCenter']">Crisis Center</a>
              <a [routerLink]="['Heroes']">Heroes</a>
              <router-outlet></router-outlet>
  `,
    styles: [`
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
  `],
    directives: [ROUTER_DIRECTIVES, HeroDetailComponent],
    providers: [HeroService]
})

@RouteConfig([
    { path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent },
    { path: '/heroes', name: 'Heroes', component: HeroListComponent }
])

export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) { }

    getHeroes() {
        this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
}
