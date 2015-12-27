import {Component}         from 'angular2/core';
import {HeroFormComponent} from './form/hero-form.component';
import {BirthdayOne} from './birthday/birthday-one.component';
import {PowerBoostCalculator} from './power/boost-calculator.component';

@Component({
    selector: 'my-app',
    template: `<hero-form></hero-form>
               <hero-birthday></hero-birthday>
               <power-boost-calculator></power-boost-calculator>
               <hero-message></hero-message>
              `,
    directives: [HeroFormComponent, BirthdayOne, PowerBoostCalculator]
})

export class AppComponent { }