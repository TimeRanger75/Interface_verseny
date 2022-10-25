"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_home_scores, _Football_away_scores;
class Football {
    constructor(winner, home_scores, away_scores, Date) {
        _Football_home_scores.set(this, void 0);
        _Football_away_scores.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _Football_home_scores, home_scores, "f");
        __classPrivateFieldSet(this, _Football_away_scores, away_scores, "f");
        this.Date = Date;
    }
    result() {
        return "Football match" + __classPrivateFieldGet(this, _Football_home_scores, "f") + ":" + __classPrivateFieldGet(this, _Football_away_scores, "f");
    }
}
_Football_home_scores = new WeakMap(), _Football_away_scores = new WeakMap();
class Marathon {
    constructor(winner, Date, result_time) {
        this.winner = winner;
        this.Date = Date;
        this.result_time = result_time;
    }
    result() {
        let result_time_min = Math.floor(this.result_time / 60);
        let result_time_sec = this.result_time - result_time_min * 60;
        return "Maraton: " + result_time_min + " min " + result_time_sec + " sec";
    }
}
class Calvinball {
    constructor(winner, Date) {
        this.winner = winner;
        this.Date = Date;
        this.outcome = Math.floor(Math.random() * 101) + 10;
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        if (this.winner == "Calvin" || this.winner == "Hobbes") {
            this.winner = winner;
        }
        else {
            console.log("The winners're only can be Calvin or Hobbes");
        }
    }
    result() {
        return "Calvinball: " + this.outcome + " points";
    }
}
let result = [
    new Football("Barcelona", 4, 5, new Date(2020 - 6 - 10)),
    new Football("Celtic", 1, 0, new Date(1999, 2, 26)),
    new Marathon("Cole Williams", new Date(2012, 8, 6), 12578),
    new Marathon("John Doe", new Date(2021 - 11 - 24), 15487),
    new Calvinball("Calvin", new Date(1972 - 3 - 11)),
    new Calvinball("Michael", new Date(1998 - 12 - 28))
];
for (let results of result) {
    // console.log(results.result());
    if (results.winner == "Calvin") {
        console.log(results.result());
    }
    console.log(results.result());
}
