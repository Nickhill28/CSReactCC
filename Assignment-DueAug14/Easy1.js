//arrow function
var charCount = (str1,str2) => { 
    var count = 0, i = 0;
    for(i; i<str2.length; i++)
        if(str2[i]===str1)
            count++;
    return count;
}
console.log(charCount ("a", "edabit"));
console.log(charCount ("c", "Chamber of secrets"));
console.log(charCount ("b", "big fat bubble") );