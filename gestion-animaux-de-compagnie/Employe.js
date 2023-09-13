"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
class Employe {
    constructor(id, nom, animal) {
        this._id = id;
        this._nom = nom;
        this._animal = animal;
    }
    get id() {
        return this._id;
    }
    get nom() {
        return this._nom;
    }
    set nom(nouveauNom) {
        this._nom = nouveauNom;
    }
    get animal() {
        return this._animal;
    }
    travaillerAvec() {
        if (this._animal) {
            console.log(`${this._nom} travaille avec ${this._animal.nom} du ${this._animal.debutPret.toLocaleDateString()} au ${this._animal.finPret.toLocaleDateString()}`);
        }
        else {
            console.log(`${this._nom} ne travaille pas avec d'animal.`);
        }
    }
    assignerAnimal(animal) {
        this._animal = animal;
    }
    retirerAnimal() {
        this._animal = undefined;
    }
}
exports.Employe = Employe;
