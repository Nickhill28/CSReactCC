numberCheck = (value) => {
    for (let i = 0; i < value.length; i++) {
        if (value[i] >= 1 && value[i] <= 9) {
            return true
        }
    }
    return false
}

numberInString = (value) => {

    val = value.filter((string) => {
        return numberCheck(string)
    })
    return val

}

console.log(numberInString(["1a","a","2b","b"]))
console.log(numberInString(["abc","abc10"]))
console.log(numberInString(["abc", "ab10c", "a10bc", "bcd"]))
console.log(numberInString(["this is a test", "test1"]))