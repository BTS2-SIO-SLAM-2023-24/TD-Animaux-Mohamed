"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const Animal_1 = require("./Animal");
class Chat extends Animal_1.Animal {
    constructor(id, nom, age, debutPret, finPret) {
        super(id, nom, age, debutPret, finPret);
    }
    miauler() {
        console.log("Miaou! Miaou!");
    }
    faireDuBruit() {
        this.miauler();
    }
}
exports.Chat = Chat;
