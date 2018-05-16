import { ICurrency } from "./ICurrency";

export class Currency implements ICurrency {
  amount: number;
  symbol: string;

  /**
   * Creates an instance of Currency.
   * @param {number} value
   * @param {string} [symbol="€"]
   * @memberof Currency
   */
  constructor(value: number, symbol: string = "€") {
    this.amount = value;
    this.symbol = symbol;
  }

  /**
   * Convert a number to a string with specific particularities
   *
   * @private
   * @param {number} value
   * @returns {string}
   * @memberof CurrencyConvert
   */
  toString(): string {
    return (
      this.amount
        .toString()
        .replace(/\s/g, "'")
        .replace(/\./g, ",") + this.symbol
    );
  }
}
