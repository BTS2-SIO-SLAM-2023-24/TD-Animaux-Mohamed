"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(id, nom, age, debutPret, finPret) {
        this._id = id;
        this._nom = nom;
        this._age = age;
        this._debutPret = debutPret;
        this._finPret = finPret;
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
    get age() {
        return this._age;
    }
    set age(nouvelAge) {
        this._age = nouvelAge;
    }
    get debutPret() {
        return this._debutPret;
    }
    set debutPret(nouvelleDate) {
        this._debutPret = nouvelleDate;
    }
    get finPret() {
        return this._finPret;
    }
    set finPret(nouvelleDate) {
        this._finPret = nouvelleDate;
    }
    faireDuBruit() {
        // Cette méthode sera redéfinie par les sous-classes (Chien et Chat)
    }
}
exports.Animal = Animal;
