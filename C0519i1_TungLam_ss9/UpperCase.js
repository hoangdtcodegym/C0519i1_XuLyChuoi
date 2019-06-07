function isFirstLetterUpperCase(str){
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        alert("Ký tự đầu tiên của chuỗi là chữ hoa");
    } else {
        alert("String's first character is not uppercase");
    }
}