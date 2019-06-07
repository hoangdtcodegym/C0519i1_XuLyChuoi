function isCheck(email) {
    let regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+.[A-Za-z0-9]+$/;
    if (regexp.test(email)){
        console.log("true");
    } else {
        console.log("false");
    }
}
isCheck("a@gmail.com");
isCheck("@gmail.com");
isCheck(".@gmail.com");
isCheck("ab@gmail.");
isCheck("abc@hotmail.com");
isCheck("ab@yahoo.com");