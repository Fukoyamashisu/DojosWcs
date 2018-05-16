import { Currency } from "./Currency";

/**
 * Convert a Number to a Currency
 *
 * @export
 * @class CurrencyConvert
 */
export class CurrencyConvert {
  private _data: number | [number] | string | object;
  private _converted: any;

  /**
   * Creates an instance of ConvertCurrency.
   * @param {(number | [number] | string | object)} data
   * @memberof CurrencyConvert
   */
  constructor(data: number | [number] | string | object) {
    this._data = data;
    this._converted = undefined;
  }

  public get data(): number | [number] | string | object {
    return this._data;
  }

  public set data(value): void {
    if (Array.isArray(value)) this.convertArray(value);
    else if (typeof value === "object") this.convertObject(value);
    else if (typeof value === "string") this.convertString(value);
    else if (!isNaN(value)) this._converted = new Currency(value);
  }

  public get converted(): any {
    return this._converted;
  }

  private convertString(value: string): Currency | [Currency] {
    const pattern = /\b([\d.,']+)\b/g;
    let catches = value.match(pattern);

    if (catches === null) {
      throw new Error("Aucune valeur trouvé dans cette chaîne de charactère.");
    }

    if (catches.length > 1) {
      this._converted = catches.map(item => new Currency(item, "€"));
    } else {
      this._converted = catches.map(item => new Currency(item, "€"))[0];
    }

    return this.converted;
  }

  /**
   * Convert an array of number to an array of currency
   *
   * @private
   * @param {[number]} value
   * @returns {[string]}
   * @memberof CurrencyConvert
   */
  private convertArray(value: [number]): [Currency] {
    this._converted = value.map(item => new Currency(item, "€"));
    return this._converted;
  }

  /**
   * Convert all number values into string euros values.
   *
   * @private
   * @param {object} value
   * @returns {object}
   * @memberof CurrencyConvert
   */
  private convertObject(value: object): void {}

  public toString(): string {
    return JSON.stringify(this);
  }
}
