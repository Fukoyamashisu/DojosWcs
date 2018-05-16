/**
 * ES6 Function : Objet
 *
 * But: Calculer le Prix TTC du Panier
 *
 */
function checkout() {
    // Le Panier
    const panier = {
        prixTTC: 0,
        title: "Mon Super Panier",
        pays: "France",
        paypal: false,
        dateCreated: new Date(),
        promotion: 15,
        tva: function() {
            if (this.pays === "France") {
                return 20;
            } else if (this.pays === "UK") {
                return 10;
            }
            return 0;
        },
        shipping: function() {
            if (this.paypal) {
                return 0;
            }

            return this.prixTTC * 0.25;
        },
        articles: [
            {
                title: "Article One",
                quantity: 2,
                prix: 235,
                code: "fr"
            },
            {
                title: "Article Two",
                quantity: 1,
                prix: 125,
                reduction: 10, // en euro
                code: "en"
            },
            {
                title: "Article Three",
                quantity: 1,
                prix: 100.25,
                code: "fr"
            },
            {
                title: "Article Four",
                quantity: 3,
                prix: 52,
                code: "fr"
            },
            {
                title: "Article Five",
                quantity: 2,
                prix: 40,
                reduction: 5,
                code: "es"
            },
            {
                title: "Article Six",
                quantity: 2,
                prix: 20,
                code: "fr"
            },
            {
                title: "Article Seven",
                quantity: 1,
                prix: 10,
                code: "de"
            }
        ]
    };

    panier.prixTTC = panier.articles
        .filter(article => article.code == "fr")
        .map(article => {
            const result = article.prix * article.quantity;
            return article.reduction
                ? (result -= result * (article.reduction / 100))
                : result;
        })
        .reduce((a, b) => a + b);

    if (panier.promotion > 0) {
        panier.prixTTC -= panier.prixTTC * (panier.promotion / 100);
    }

    panier.prixTTC = panier.prixTTC * (panier.tva() / 100 + 1);
    panier.prixTTC += panier.shipping();
    return panier;
}

console.log(checkout());

// Don't touch...
module.exports = checkout;
