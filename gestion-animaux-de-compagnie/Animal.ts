export class Animal {
    private _id: number;
    private _nom: string;
    private _age: number;
    private _debutPret: Date;
    private _finPret: Date;

    constructor(
        id: number,
        nom: string,
        age: number,
        debutPret: Date,
        finPret: Date
    ) {
        this._id = id;
        this._nom = nom;
        this._age = age;
        this._debutPret = debutPret;
        this._finPret = finPret;
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

    get age(): number {
        return this._age;
    }

    set age(nouvelAge: number) {
        this._age = nouvelAge;
    }

    get debutPret(): Date {
        return this._debutPret;
    }

    set debutPret(nouvelleDate: Date) {
        this._debutPret = nouvelleDate;
    }

    get finPret(): Date {
        return this._finPret;
    }

    set finPret(nouvelleDate: Date) {
        this._finPret = nouvelleDate;
    }

    faireDuBruit() {
        // Cette méthode sera redéfinie par les sous-classes (Chien et Chat)
    }
}
