function checkNumberPhone(numberPhone) {
    let patt = /\([0-9]{2,}\)\-\((0)[0-9]{9,}\)/;
    if(patt.test(numberPhone)){
        console.log("true");
    } else {
        console.log("false");
    }
}

checkNumberPhone("(84)-(0978489648)");
checkNumberPhone("(a8)-(22222222)");
checkNumberPhone("84-0341256335");
checkNumberPhone("(84)-(0812412893)");