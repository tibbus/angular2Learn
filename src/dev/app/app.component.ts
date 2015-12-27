import {Component}         from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroFormComponent} from './form/hero-form.component';
import {BirthdayOne} from './birthday/birthday-one.component';
import {PowerBoostCalculator} from './power/boost-calculator.component';

import {CrisisListComponent}   from './crisis-list.component';
import {HeroListComponent}     from './hero-list.component';

@Component({
    selector: 'my-app',
    template: `<hero-form></hero-form>
               <hero-birthday></hero-birthday>
               <power-boost-calculator></power-boost-calculator>
               <hero-message></hero-message>

              <h1>Component Router</h1>
              <a [routerLink]="['CrisisCenter']">Crisis Center</a>
              <a [routerLink]="['Heroes']">Heroes</a>
              <router-outlet></router-outlet>
  `,
    directives: [HeroFormComponent, BirthdayOne, PowerBoostCalculator, ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent },
    { path: '/heroes', name: 'Heroes', component: HeroListComponent }
])

export class AppComponent { }