import {AppComponent}     from './app/app.component';
import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService}       from './app/heroes/hero.service';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HeroService
]);