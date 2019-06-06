function number(str) {
    pega = /^[0-9][0-9][\-]([0-9]{10,11})$/;
     if (pega.test(str)) {
         return true;
     }
     return false;

}
 console.log(number("23-1234555233"));
 console.log(number("8a-0972835810"));