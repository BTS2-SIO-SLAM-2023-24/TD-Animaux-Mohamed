import { Animal } from './Animal';

export class Chien extends Animal {
    private _race: string;

    constructor(
        id: number,
        nom: string,
        age: number,
        debutPret: Date,
        finPret: Date,
        race: string
    ) {
        super(id, nom, age, debutPret, finPret);
        this._race = race;
    }

    get race(): string {
        return this._race;
    }

    set race(nouvelleRace: string) {
        this._race = nouvelleRace;
    }

    aboyer() {
        console.log("Woof! Woof!");
    }

    faireDuBruit() {
        this.aboyer();
    }
}
