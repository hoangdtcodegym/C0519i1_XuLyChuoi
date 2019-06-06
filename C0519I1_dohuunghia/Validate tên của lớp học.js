function checkNameClass(nameclass) {
    let patt = /[CAP]+([0-9]{4})+[GHIKLM]+$/;
    if (patt.test(nameclass)){
        console.log("true");
    } else {
        console.log("false");
    }
}
console.log(checkNameClass("C0519I"));
console.log(checkNameClass("M0318G"));
