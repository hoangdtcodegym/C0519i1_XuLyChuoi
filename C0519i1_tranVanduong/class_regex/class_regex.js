let regex = /^[ACP]+[0-9]{4}[GHIKLM]+$/;
function isclassRegex(str) {
    if(regex.test(str)){
        return true;
    }else {
        return false;

    }

}
console.log(isclassRegex("C0318G"));
console.log(isclassRegex('120193'));
