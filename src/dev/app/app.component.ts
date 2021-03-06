﻿import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HighlightDirective} from './highlight.directive';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

@Component({
    selector: 'my-app',
    template: `<div>
  <input type="radio" name="colors" (click)="color='lightgreen'">Green
  <input type="radio" name="colors" (click)="color='yellow'">Yellow
  <input type="radio" name="colors" (click)="color='cyan'">Cyan
</div>
    <h1 class="title" [myHighlight]="color" [defaultColor]="'violet'">Component Router</h1>
    <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES, HighlightDirective]
})

@RouteConfig([
    { // Crisis Center child route
        path: '/crisis-center/...',
        name: 'CrisisCenter',
        component: CrisisCenterComponent,
        useAsDefault: true
    },
    { path: '/heroes', name: 'Heroes', component: HeroListComponent },
    { path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent },
    { path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] }
])
export class AppComponent { }