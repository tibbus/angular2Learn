import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroService} from './heroes/hero.service';
import {Hero} from './hero';

import {HeroDetailComponent} from './heroes/hero-detail.component';
import {CrisisListComponent}   from './crisis-center/crisis-list.component';
import {HeroListComponent}     from './heroes/hero-list.component';

@Component({
    selector: 'my-app',
    template: ` 
              <h1>Component Router</h1>
              <a [routerLink]="['CrisisCenter']">Crisis Center</a>
              <a [routerLink]="['Heroes']">Heroes</a>
              <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES, HeroDetailComponent]
})

@RouteConfig([
    { path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent },
    { path: '/heroes', name: 'Heroes', component: HeroListComponent },
    { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent }
])

export class AppComponent {}
