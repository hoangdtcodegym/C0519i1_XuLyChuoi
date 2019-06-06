function Pattern(str) {
    regx = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regx.test(str)) {
        return true;
    }
    return false;
}
console.log(Pattern("ngovantungcoi@gmail.com"));
console.log(Pattern("ngovantung@yahoo.com"));
console.log(Pattern("ngovantungcoi@hotmail.com"));
console.log(Pattern("ngovantung@coi@gmail.com"));
console.log(Pattern("ngovantungcoi@gmail."));

