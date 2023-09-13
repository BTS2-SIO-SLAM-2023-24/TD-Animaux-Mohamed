"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chien = void 0;
const Animal_1 = require("./Animal");
class Chien extends Animal_1.Animal {
    constructor(id, nom, age, debutPret, finPret, race) {
        super(id, nom, age, debutPret, finPret);
        this._race = race;
    }
    get race() {
        return this._race;
    }
    set race(nouvelleRace) {
        this._race = nouvelleRace;
    }
    aboyer() {
        console.log("Woof! Woof!");
    }
    faireDuBruit() {
        this.aboyer();
    }
}
exports.Chien = Chien;
