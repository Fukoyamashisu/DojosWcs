/**
 * Validation Class
 */
class ValidationForm {
    /**
     * Valid a Nom
     * Dupond
     * Dupond-Moretti
     * Dupond Moretti
     */
    isNom(nom) {
        return /[\w- ]+/i.test(nom);
    }

    /**
     * Valid a Email
     * toto@gmail.com
     * tata@la-poste.net
     */
    isEmail(email) {
        return /([\w\.-]+)@([\w-]+).([a-z]{2,4})/i.test(email);
    }

    /**
     * Valid a Date
     * 30
     * 30ans
     *
     */
    isAge(age) {
        return /([\d]{1,3})(?:ans)?/i.test(age);
    }

    /**
     * Valid a cp
     * 69002
     */
    isCP(cp) {
        return /[\d]{5}/.test(cp);
    }

    /**
     * Valid a price
     * 19
     * 19.75
     * 19.75€
     * 19.75euros
     */
    isPrice(price) {
        return /([\d]+)(.[\d]{2})?(€|euros)?/i.test(price);
    }
    /**
     * Valid a Portable
     * 0674585648
     * 06-74-58-56-48
     * 06 74 58 56 48
     */
    isPortable(portable) {
        return /(?:0|\+[\d]{2})(?:[ \.-]?(?:[\d]{1}))(?:[ \.-]?(?:[\d]{2})){4}/.test(
            portable
        );
    }

    /**
     * Valid a Date
     * dd-mm-YYYY
     * dd/mm/YYYY
     * dd mm YYYY
     */
    isDate(date) {
        return /([\d]{2})[ /-]([\d]{2})[ /-]([\d]{4})/.test(date);
    }

    /**
     * Valid a CB
     * 4974 0142 1028 5255
     * 4974-0142-1028-5255
     */
    isCB(cb) {
        return /(?:[ -]?[\d]{4}){4}/.test(cb);
    }

    /**
     * Valid a Reference of Product
     * AA-0000-BB
     */
    isReference(ref) {
        return /([a-z]{2})-([\d]{4})-([a-z]{2})/i.test(ref);
    }

    /**
     * Valid a Password
     * 6 charactères minimum alphanumériques
     */
    isPassword(secretPassword) {
        return;
        /^[a-z0-9]{6,}/i.test(secretPassword);
    }

    /**
     * Valid a langage of programmation between PHP, JS, Mysql
     * PHP
     * PHP,JS
     * PHP,JS,Mysql
     * JS,Mysql
     */
    isPreferedLangagues(langages) {
        return /PHP|JS|Mysql/i.test(langages);
    }

    /**
     * Valid a hour
     * 12:30
     * 12h30
     */
    isHour(hour) {
        return /[\d]{2}(?::|h)[\d]{2}/i.test(hour);
    }
}

const form = new ValidationForm();
