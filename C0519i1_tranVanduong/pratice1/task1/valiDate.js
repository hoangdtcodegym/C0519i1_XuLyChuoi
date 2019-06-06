let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
function isvalidate(str) {
    if(regex.test(str)){
        return true;
    }else {
        return false;
    }

}
console.log(isvalidate("11/05/1996"));