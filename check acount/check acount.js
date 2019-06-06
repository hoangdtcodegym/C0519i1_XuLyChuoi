function isAcountvalid(str) {
    let regExp = /^[_a-z0-9]{6,}$/;
    if (regExp.test(str)) {
        return true;
    }return false;
    
}