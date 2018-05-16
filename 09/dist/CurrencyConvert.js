"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Currency_1 = require("./Currency");
class CurrencyConvert {
    constructor(data) {
        this._data = data;
        this._converted = undefined;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        if (Array.isArray(value))
            this.convertArray(value);
        else if (typeof value === "object")
            this.convertObject(value);
        else if (typeof value === "string")
            this.convertString(value);
        else if (!isNaN(value))
            this._converted = new Currency_1.Currency(value);
    }
    get converted() {
        return this._converted;
    }
    convertString(value) {
        const pattern = /\b([\d.,']+)\b/g;
        let catches = value.match(pattern);
        if (catches === null) {
            throw new Error("Aucune valeur trouvé dans cette chaîne de charactère.");
        }
        if (catches.length > 1) {
            this._converted = catches.map(item => new Currency_1.Currency(item, "€"));
        }
        else {
            this._converted = catches.map(item => new Currency_1.Currency(item, "€"))[0];
        }
        return this.converted;
    }
    convertArray(value) {
        this._converted = value.map(item => new Currency_1.Currency(item, "€"));
        return this._converted;
    }
    convertObject(value) { }
    toString() {
        return JSON.stringify(this);
    }
}
exports.CurrencyConvert = CurrencyConvert;
