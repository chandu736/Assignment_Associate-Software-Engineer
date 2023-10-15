let displayValue='';
let currentValue=null;
let operator=null;

function clearDisplay(){
    displayValue='';
    currentValue=null;
    operator=null;
    updateDisplay();
}

function appendToDisplay(value){
    displayValue+=value;
    updateDisplay(); 
}

function updateDisplay(){
    document.getElementById('display').value=displayValue;
}

function operate(newOperator){
    if(currentValue===null){
        currentValue=parseFloat(displayValue);
    }else{
        currentValue=evaluate(currentValue,parseFloat(displayValue),operator);
    }
    displayValue='';
    operator=newOperator;
    updateDisplay();
}

function calculate(){
    if(currentValue!==null && operator!==null){
        currentValue=evaluate(currentValue,parseFloat(displayValue),operator);
        operator=null;
        displayValue=currentValue.toString();
        updateDisplay();
    }
}

function evaluate(a,b,operator){
    switch(operator){
        case '+' : return a+b;
        case '-' : return a-b;
        case '*' : return a*b;
        case '/' :
            if(b!==0){
                return a/b;
            }else{
                alert('Division by zero is not possible.');
                clearDisplay();
                return null;
            }
    }
}