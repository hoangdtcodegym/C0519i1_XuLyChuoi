function checkphone(str) {
    phonenumber = /^[0-9][0-9][\-][0-9]{10,11}$/;
    if (phonenumber.test(str)){
        alert("Chuẩn mẹ luôn");
    } else {
        alert("Ngu lồn");
    }
}