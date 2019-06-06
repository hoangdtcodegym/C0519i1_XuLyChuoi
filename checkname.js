function checknameclass(str) {
    nameclass = /^[ACP][0-9]{4,4}[GHIKLM]$/;
    if (nameclass.test(str)){
        alert("Chuẩn mẹ luôn");
    } else {
        alert("Ngu lồn");
    }
}