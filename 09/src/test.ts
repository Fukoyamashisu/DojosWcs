import { Currency } from "./Currency";
import { CurrencyConvert } from "./CurrencyConvert";

// // Normal
const amount = new Currency(40, "€");
console.log(amount.toString());

const convert = new CurrencyConvert("232.75");
convert.data = "232.75";
console.log(convert);
console.log(convert.converted);

// const amount = new Currency("Je Suis une Chaine"); // Error: "Aucune valeur à traduire"
// const amount = new Currency(
//   "Je suis une Chaine qui contient un nombre: 232.75" // "232,75€"
// );
// const amount = new Currency(756.75); // "756,75€"
// const amount = new Currency(12.3456); // "12'345'623€"
// const amount = new Currency([12.75, 15.5, 10, 2]); // ["12,75€", "15,5€", "10€", "2€"]
// const amount = new Currency({
//   title: "Produit num. 1",
//   ht: "250",
//   ttc: "255.5",
//   tva: 20
// }); // { ht: "250€", ttc: "255,5€"}
