/**
 * Take a sentence to return a Verlan language
 * @param {String} phrase
 */


function verlan(phrase) {
    let string = phrase;
    //regex test minimum 6 caractères et au moins deux consonnes
    const re = /(?=.*[^aeiouy]{2})[A-Z]{6,}/gi;
    //check all match word in phrase
    const str = string.match(re);
    // Reverse part of word where the letter is a consonant closest to middle
    const wordReverse = str.map(element => {
        let middle = Math.round(element.length / 2);
        for (value of str) {
            const check = element[middle].match(/[aeiouy]/i);
            if (check) {
                middle--;
            }
        }
        return element.slice(middle, element.length) + element.slice(0, middle);
    });
    //Inverse word with ReverseWord
    str.forEach((element, index) => {
        string = string.replace(`${element}`, `${wordReverse[index]}`);
    });
    console.log(string);
    return string;
}




verlan("Les maisons près de la fontaine dans le quartier");