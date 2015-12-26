import {Component} from 'angular2/core';

@Component({
    selector: 'hero-birthday',
    template: `
              <p>The hero's birthday is {{ birthday | date:format | uppercase}}</p>
              <button (click)="toggleFormat()">Toggle Format</button>
            `
})

export class BirthdayOne {
    birthday = new Date(1988, 3, 15); // April 15, 1988

    toggle = true; // start with true == shortDate

    get format() { return this.toggle ? 'shortDate' : 'fullDate' }

    toggleFormat() { this.toggle = !this.toggle; }
}