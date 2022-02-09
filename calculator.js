const add = function(a, b) {
    // return a + b;
    console.log(a + b);
  };
  
const subtract = function(a, b) {
    // return a - b;
    console.log(a - b);
  };
  
const multiply = function(a, b) {
      //return a * b;
      console.log(a * b);
  };
  
const divide = function(a, b) {
    //return a / b;
    if (b === 0) {
        console.log("Can't divide by zero, ya clown!");
    } else {console.log(a / b);}
    
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

const screenAdd = function(a) {
    screen = screen.concat(a);
    document.getElementById("display").innerHTML = screen;
    console.log(screen);
};

