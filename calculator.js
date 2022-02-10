const add = function(a, b) {
    //return a + b;
    console.log(a+b);
  };
  
const subtract = function(a, b) {
    return a - b;
    
  };
  
const multiply = function(a, b) {
      return a * b;
  };
  
const divide = function(a, b) {
    if (b === 0) {
        console.log("Can't divide by zero, ya clown!");
    } else {return a / b;}
    
  };


const operate = function(operator, a, b) {
    switch(operator) {
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "*":
            multiply(a,b);
            break;
        case "/":
            divide(a,b);
            break;
    };
};

var screen = '';

const clearScreen = function() {
    screen = '';
    document.getElementById("display").innerHTML = 0;
};
let firstNo = '';
    let oper = '';
const screenAdd = function(keypress) {
    
    screen = screen.concat(keypress);
    document.getElementById("display").innerHTML = screen;
    
    if (isNaN(keypress) == false) {
        firstNo = firstNo.concat(keypress);
        console.log("firstno " +firstNo);
    } else {
        oper = oper.concat(keypress);
        firstLen = firstNo.length;
        console.log("operator "+oper);
        if (oper.length > 1) {
            
        
            secondNo = screen.replace(firstNo.slice(0,firstLen-2)+oper.slice(0,1),'');
            show = operate(oper.slice(0,1),parseFloat(firstNo.replace(secondNo.slice(0,-1),'')),parseFloat(secondNo.slice(0,-1)));
            console.log(operate("+",12,34));
            screen = operate(oper, firstNo, secondNo.slice(0,-1)) + oper.slice(-1);
            console.log("screen "+screen);
            oper = oper.slice(-1);
            firstNo = operate(oper, firstNo, secondNo.slice(0,-1));
        };
    };
    
    
        
    
    /* if (isNaN(screen) == true) {
        oper = screen.slice(-1);
        firstNo = screen.slice(0,-1);
        console.log(oper);
        console.log(firstNo);
    };
     */
};

const evaluate = function(display) {
    for (let i = 0; i < display.length; i++) {
        process(display[i]);
      }
};

