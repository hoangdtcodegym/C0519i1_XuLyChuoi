function checkemail(str) {
    regx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regx.test(str)) {
        alert("chuẩn mẹ luôn");
    } else {
        alert("sai mẹ rồi");
    }
}