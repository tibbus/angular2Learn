import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent}     from './app/app.component';
import {DialogService}    from './app/dialog.service';
import {HeroService}      from  './app/heroes/hero.service';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    DialogService
]);