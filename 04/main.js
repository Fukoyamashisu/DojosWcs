class Palyndrome {
    constructor(mot) {
        this.mot = mot;
    }

    retourne() {
        return this.mot
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f\s]/g, "")
            .split("")
            .reverse()
            .join("");
    }

    prepared() {
        return this.mot
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f\s]/g, "");
    }

    estPalyndrome() {
        return this.retourne() === this.prepared();
    }
}

const palyndrome = new Palyndrome("Ésope reste ici et se repose");
palyndrome.estPalyndrome();
