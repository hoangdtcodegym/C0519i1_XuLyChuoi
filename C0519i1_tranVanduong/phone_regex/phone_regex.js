let regex = /^[0-9]{2}-\d{3}-\d{4}$/;

function isphonerexgex(phoneNumber) {
    if (regex.test(phoneNumber)) {
        return true;
    }
    return false;

}

console.log(isphonerexgex("09-123-6789"));