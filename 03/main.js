// Je pars du principe que l'on utilise que de des lettres latines.
process.stdin.setEncoding("utf8");
process.stdin.resume();

console.log("Pour sortir faite Ctrl+C.");
console.log("Dites moi tout:");

process.stdin.on("data", reponse => {
    console.dir(`Voici le resultat : ${JSON.stringify(countPhrase(reponse))}`);
});

function countPhrase(sentence) {
    let result = {};

    sentence
        .toLowerCase()
        .split("")
        .filter(letter => /[^\W_]/i.test(letter))
        .map(letter => {
            if (letter in result) {
                result[letter] += 1;
            } else {
                result[letter] = 1;
            }
        });

    const sorted = Object.entries(result).sort((a, b) => {
        return b[1] - a[1];
    });

    result = {};
    sorted.forEach(element => {
        result[element[0]] = element[1];
    });

    return result;
}

module.exports = countPhrase;
