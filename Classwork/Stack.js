class Stack {
  //default constructor for stack
  constructor(){
    this.items=[];
  }
  //add in stack
  push(element){ 
    this.items.push(element);
  }
  //remove from stack
  pop(){
    if (this.items.length == 0)
    return "Underflow"; 
    return this.items.pop(); 
  }
  //function to see the last pointer of the stack
  peek(){
    return this.items[this.items.length - 1]; 
  }
  //function to see if the stack is empty
  isEmpty(){
    return this.items.length == 0;
  }
  //print the stack
  printStack(){
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i] + " "; 
    return str; 
  }
}

var stack = new Stack;
console.log(stack.pop());

stack.push(5); 
stack.push(9); 
stack.push(30); 

console.log(stack.printStack()); 

console.log(stack.peek()); 

console.log(stack.pop()); 

console.log(stack.printStack());  
