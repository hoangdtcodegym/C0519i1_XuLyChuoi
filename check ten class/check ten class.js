function isNamevalid(str) {
    let regexp= /^(C|A|P)+([0-9]{4})+(G|H|I|K|L|M)$/;
    if (regexp.test(str)){
        return true;


    } return false;

}