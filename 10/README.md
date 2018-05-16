# Dojo Ten: 2 pour le prix d'un !

## Dojo 1: Algo du Mot de Pass Crypté: (Niveau 7 CodeWar)

Ecrire une fonction qui dit si tous les caractères d'une chaine soient présents dans une autre chaine tel que:

crypto("mdp", "AZR4T4J8K64È-È4d4\*\*6P\TYR56z4J6fUM-YT4Èh6#84U@JGFHg6K6ÇÇHDG&468g9JF46GJH") => true

crypto("pass", "G65Fd465aFSPG4FD6G4DFSG6cFDHG-D4SH64FDv64GEH64g3DF5freAG44FGF6-zDHG4FmDg4HGD") => true

crypto("no", "a4Z566ER4_n5T154Y") => false

## Dojo 2: Algorithme du K-Digits: (Niveau 6 CodeWar)

Ecrire une fonction kdigits qui prend en paramètre 2 nombres: n et k tel que:

kdigits(63289, 2) => On enlève les 2 plus grands nombres, puis on cherche le nombres le plus petit parmis les nombres restants: => "2"

kdigits(1032, 1) => "1" (sans le 0)

kdigits(9573, 2) => "3" (sans le 9,7)

kdigits(48576575, 3) => "4" (sans le 8,7,6)

kdigits(12131211212, 2) => "1"

kdigits(111112, 2) => "Aucun K nombre détécté" (sans le 1,2)

kdigits(1234, 4) => "Aucun K nombre détécté" (sans le 8,7,6)

kdigits(123, 4) => Erreur (avec la classe Error): "Attention, votre nombre d'extraction est plus grand que le nombre" (sans le 8,7,6)

Bonus: Modifier la fonction afin qu'elle retourne LES K nombres plus petits:

kdigits(9573, 2) => [3,5] (sans le 9,7)
