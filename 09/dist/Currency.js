"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Currency {
    constructor(value, symbol = "€") {
        this.amount = value;
        this.symbol = symbol;
    }
    toString() {
        return (this.amount
            .toString()
            .replace(/\s/g, "'")
            .replace(/\./g, ",") + this.symbol);
    }
}
exports.Currency = Currency;
