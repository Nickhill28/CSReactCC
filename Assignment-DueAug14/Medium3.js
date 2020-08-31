function removeDups(arr) {
    let NoDups = arr.filter((char, index) => {
        return arr.indexOf(char) === index;
    });
    console.log(NoDups);
}
removeDups([1, 0, 1, 0]);
removeDups (["The", "big", "cat"]);
removeDups (["John", "Taylor", "John"]);