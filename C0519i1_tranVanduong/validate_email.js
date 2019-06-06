function isEmailRegex(email) {
    let regex = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+.[A-Za-z0-9]+$/;
    if (regex.test(email)) {
        console.log("truedskjflksjfkdsl");
    } else {
        console.log("false");
        return false;
    }
}
let a = isEmailRegex("abc@gmail.com");
