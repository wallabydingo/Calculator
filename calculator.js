const add = function(a, b) {
    return a + b;
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
            let sum = add(a,b);
            return sum;
            break;
        case "-":
            let diff = subtract(a,b);
            return diff;
            break;
        case "*":
            let prod = multiply(a,b);
            return prod;
            break;
        case "/":
            let frac = divide(a,b);
            return frac;
            break;
    };
    
};

let firstNo = '';
let oper = '';

var screen = '';

const clearScreen = function() {
    screen = '';
    firstNo = '';
    oper = '';
    secondNo = '';
    document.getElementById("display").innerHTML = 0;
};

const screenAdd = function(keypress) {
    
    screen = screen.concat(keypress);
    document.getElementById("display").innerHTML = screen;
    
    if (isNaN(keypress) == false) {
        firstNo = firstNo.concat(keypress);
        console.log("firstno " +firstNo);
    } else {
        oper = oper.concat(keypress);
        firstLen = firstNo.length;
        console.log("firstno digits: "+firstLen);
        console.log("operator "+oper);
        if (oper.length > 1) {
            
            console.log(firstNo);
            secondNo = screen.replace(firstNo.slice(0,firstLen-2)+oper.slice(0,1),'');
            console.log(secondNo);
            //show = operate(oper.slice(0,1),parseFloat(firstNo.replace(secondNo.slice(0,-1),'')),parseFloat(secondNo.slice(0,-1)));
            console.log(oper.slice(0,1));
            //console.log(parseFloat(firstNo.replace(secondNo.slice(0,-1),'')));
            firstNo = parseFloat(firstNo.replace(secondNo.slice(0,-1),''));
            console.log(firstNo);
            secondNo = parseFloat(secondNo.slice(0,-1));
            console.log(secondNo);
            firstNo = operate(oper.slice(0,1),firstNo,secondNo).toString();
            oper = oper.slice(-1);
            screen = firstNo + oper;
            console.log(firstNo);
            console.log(oper);
            document.getElementById("display").innerHTML = screen;
            //screen = operate("+",11,22);
            //console.log(screen);
            //oper = oper.slice(-1);
            //firstNo = operate(oper, firstNo, secondNo);
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

