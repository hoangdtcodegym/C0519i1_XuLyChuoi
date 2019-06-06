let count = 0;
function countWord() {

    let str = "how many word in this sentences";
    let index =str.split(" ");

    count = count + index.length;
}
countWord();
console.log(count);