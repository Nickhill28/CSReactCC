function jackpot(arr) {
    return arr.every(function(info){
        return info === arr[0];
    })
};

console.log(jackpot(['@', '@', '@', '@']))
console.log(jackpot(["abc", "abc", "abc", "abc"]))
console.log(jackpot (["SS", "SS", "SS", "SS"]))
console.log(jackpot (["&&", "&", "&&&", "&&&&"]))
console.log(jackpot (["SS", "SS", "SS", "Ss"]))