function specialReverse(str, alphabet) {
    var splitString=str.toLowerCase().split(' ');
    for(var i=0; i<splitString.length;i++){
        if(splitString[i].startsWith(alphabet)){
           var rev= splitString[i].split('').reverse().join('');
           splitString.splice(i,1,rev);
        }
    }
   str = splitString.join(' ');
   console.log(str);

}
specialReverse ("first man to WaLK on the moon", "m");
specialReverse ("word searches are super fun", "s");
specialReverse ("peter piper picked pickled peppers", "p");