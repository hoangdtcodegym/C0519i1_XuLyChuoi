function pattern(str) {
    regexp = /^[_a-z0-9]{6,}$/;

    if (regexp.test(str)){
        return true;
    }
    return false;

}
  console.log(pattern("123abc_"));
  console.log(pattern("_abc123"));
  console.log(pattern("______"));
  console.log(pattern("123456"));
  console.log(pattern("1234"));
  console.log(pattern("Abcd"));