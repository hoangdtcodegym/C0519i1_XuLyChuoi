function classname(str) {
    page = /^([CAP])([0-9]{4})([GHIKM])$/;
    if (page.test(str)){
        return true;
    }
        return false;
}
    console.log(classname("C0532G"));
    console.log(classname("C0532l"));
