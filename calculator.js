

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
        document.getElementById("display").innerHTML = "No! div/0";
        lockButtons();
        console.log("unlock clear?")
        document.getElementById("clear").disabled = false;
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
const lockButtons = function() {
    var input = document.getElementsByTagName('button');
            for (var i = 0; i < input.length; i++) {
                input[i].disabled = true;
            };
};

const unlockButtons = function() {
    var input = document.getElementsByTagName('button');
            for (var i = 0; i < input.length; i++) {
                input[i].disabled = false;
            };
};


let firstNo = '';
let oper = '';

const lockOperators = function() {
    var input = document.getElementsByClassName('operator');
            for (var i = 0; i < input.length; i++) {
                input[i].disabled = true;
            };
};

const unlockOperators = function() {
    var input = document.getElementsByClassName('operator');
            for (var i = 0; i < input.length; i++) {
                input[i].disabled = false;
            };
};


/* const lockEquals = function() {
    document.getElementById("equals").disabled = true;
};

const unlockEquals = function() {
    document.getElementById("equals").disabled = false;
}; */


var screen = '';

const clearScreen = function() {
    screen = '';
    firstNo = '';
    oper = '';
    secondNo = '';
    document.getElementById("display").innerHTML = 0;
    unlockButtons();
    lockOperators();
    document.getElementById("bksp").disabled = true;
};

const screenAdd = function(keypress) {
    document.getElementById("bksp").disabled = false;
    if (keypress == 'b') {
        if (screen.slice(-1) == oper.slice(-1)) {
            oper = '';
            console.log(oper);
            unlockOperators();
            document.getElementById("equals").disabled = true;
        };
        screen = screen.slice(0, -1);
        if (screen == '') {
            document.getElementById("bksp").disabled = true;
            lockOperators();
        };
        document.getElementById("display").innerHTML = screen;
    } else {
    
    screen = screen.concat(keypress);

    if (oper == '') {
        for (var i = 0; i < screen.length; i++) {
            if (screen[i] == '.') {
                document.getElementById("dec").disabled = true;
            };
        };
    } else {
        for (var i = 0; i < screen.split(oper.slice(0,1))[1].length; i++) {
            if (screen.split(oper.slice(0,1))[1][i] == '.') {
                document.getElementById("dec").disabled = true;
            };
        };
        
    };

    unlockOperators();
    
    document.getElementById("display").innerHTML = screen;
    
    if (isNaN(keypress) == true && keypress != '.') {
        oper = oper.concat(keypress);
        lockOperators();
        document.getElementById("dec").disabled = false;
        if (oper.length > 1) {
            if (oper.slice(-1) == "=") {
                lockButtons();
                document.getElementById("clear").disabled = false;
                firstNo = parseFloat(screen.split(oper.slice(0,1))[0]);
                secondNo = screen.replace(firstNo+oper.slice(0,1),'');
                secondNo = parseFloat(secondNo.replace(oper.slice(-1),''));
                firstNo = +operate(oper.slice(0,1),firstNo,secondNo).toFixed(7);
                screen = firstNo;
                document.getElementById("display").innerHTML = screen;
                secondNo = '';
                oper = '';
                
            } else {
                firstNo = parseFloat(screen.split(oper.slice(0,1))[0]);
                secondNo = screen.replace(firstNo+oper.slice(0,1),'');
                secondNo = parseFloat(secondNo.replace(oper.slice(-1),''));
                firstNo = +operate(oper.slice(0,1),firstNo,secondNo).toFixed(7);
                oper = oper.slice(-1);
                screen = firstNo + oper;
                document.getElementById("display").innerHTML = screen;
            };
        };
        
    };
     
    if (oper == '') {
        document.getElementById("equals").disabled = true;
    };
};
};
