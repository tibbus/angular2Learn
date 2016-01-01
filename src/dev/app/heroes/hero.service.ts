import {Injectable} from 'angular2/core';

export class Hero {
    constructor(public id: number, public name: string) { }
}

@Injectable()
export class HeroService {
    getHeroes() {
        return heroesPromise;
    }
    getHeroesSlowly() {
        return new Promise(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }
    getHero(id: number | string) {
        return heroesPromise
            .then(heroes => heroes.filter(h => h.id === +id)[0]);
    }
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];

var heroesPromise = Promise.resolve(HEROES);
