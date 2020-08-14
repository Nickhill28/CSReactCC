function repVowel(str){
    var str1 = []
    for(let i=0;i<str.length;i++){
      if(str[i]==='a')
      str1[i]='1'
      else if(str[i]==='e')
      str1[i]='2'
      else if(str[i]==='i')
      str1[i]='3'
      else if(str[i]==='o')
      str1[i]='4'
      else if(str[i]==='u')
      str1[i]='5'
      else
      str1[i]=str[i]
    }
    return str1.join('')
  }
  
  console.log(repVowel("karachi"))
  console.log(repVowel("chembur"))
  console.log(repVowel("khandbari"))