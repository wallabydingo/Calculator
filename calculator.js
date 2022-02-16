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
        document.getElementById("display").innerHTML = "No way!";
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
    
    if (isNaN(keypress) == true) {
        oper = oper.concat(keypress);
        if (oper.length > 1) {
            if (oper.slice(-1) == "=") {
                firstNo = parseFloat(screen.split(oper.slice(0,1))[0]);
                secondNo = screen.replace(firstNo+oper.slice(0,1),'');
                secondNo = parseFloat(secondNo.replace(oper.slice(-1),''));
                firstNo = operate(oper.slice(0,1),firstNo,secondNo).toString();
                /* firstNo = operate(oper.slice(0,1),firstNo,secondNo).toPrecision(3);
                firstNo = firstNo.toString(); */
                screen = firstNo;
                document.getElementById("display").innerHTML = screen;
                secondNo = '';
                oper = '';
            } else {
                firstNo = parseFloat(screen.split(oper.slice(0,1))[0]);
                secondNo = screen.replace(firstNo+oper.slice(0,1),'');
                secondNo = parseFloat(secondNo.replace(oper.slice(-1),''));
                firstNo = operate(oper.slice(0,1),firstNo,secondNo).toString();
                /* firstNo = operate(oper.slice(0,1),firstNo,secondNo).toPrecision(3);
                firstNo = firstNo.toString(); */
                oper = oper.slice(-1);
                screen = firstNo + oper;
                document.getElementById("display").innerHTML = screen;
            };
        };
        
    };
     
};
