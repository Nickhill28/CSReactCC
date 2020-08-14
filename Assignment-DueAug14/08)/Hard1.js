function realType(obj){
    if(obj === null)
    return "null"
    else{
      var value = obj.constructor.name 
      return value;
    }
  }
  console.log(realType (1));
  console.log(realType ("a"));
  console.log(realType (true));
  console.log(realType ([]));
  console.log(realType (null));