import { Animal } from './Animal';

export class Chat extends Animal {
    constructor(
        id: number,
        nom: string,
        age: number,
        debutPret: Date,
        finPret: Date
    ) {
        super(id, nom, age, debutPret, finPret);
    }

    miauler() {
        console.log("Miaou! Miaou!");
    }

    faireDuBruit() {
        this.miauler();
    }
}
