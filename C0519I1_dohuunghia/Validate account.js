function checkAccount(account) {
    let patt = /^[_a-z0-9]{6,}$/;
    if (patt.test(account)){
        console.log("true");
    } else {
        console.log("false");
    }
}
checkAccount("123abc_");
checkAccount("_abc123");
checkAccount("123456");
checkAccount("abcdefg");
checkAccount("12345");
checkAccount(".@");

