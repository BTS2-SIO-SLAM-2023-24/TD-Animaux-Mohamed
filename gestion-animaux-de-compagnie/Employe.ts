import { Animal } from './Animal';

export class Employe {
    private _id: number;
    private _nom: string;
    private _animal?: Animal;

    constructor(
        id: number,
        nom: string,
        animal?: Animal
    ) {
        this._id = id;
        this._nom = nom;
        this._animal = animal;
    }

    get id(): number {
        return this._id;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(nouveauNom: string) {
        this._nom = nouveauNom;
    }

    get animal(): Animal | undefined {
        return this._animal;
    }

    travaillerAvec() {
        if (this._animal) {
            console.log(`${this._nom} travaille avec ${this._animal.nom} du ${this._animal.debutPret.toLocaleDateString()} au ${this._animal.finPret.toLocaleDateString()}`);
        } else {
            console.log(`${this._nom} ne travaille pas avec d'animal.`);
        }
    }

    assignerAnimal(animal: Animal) {
        this._animal = animal;
    }

    retirerAnimal() {
        this._animal = undefined;
    }
}
