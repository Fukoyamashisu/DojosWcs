function hamming(phraseOne, phraseTwo) {


    if (typeof (phraseOne && phraseTwo) !== 'string') {
        throw new Error("Tu ne m'auras pas :)")
    }

    const nOne = phraseOne.replace(/\s/g, "").split('');
    const nTwo = phraseTwo.replace(/\s/g, "").split('');

    if (nOne.length !== nTwo.length) {
        return -1;
    }

    return compteur = nOne.reduce((acc, l, i) => l !== nTwo[i] ? acc += 1 : acc, 0);

}


try {

    console.log(hamming("Je suis une phrase", "Je suis une autre phrase"));

} catch (err) {

    console.log(err.stack);
}



console.log(hamming("jshd", "jkls"));