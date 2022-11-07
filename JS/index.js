const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const buttomEqual = document.getElementsByClassName('equal')[0];
const buttomDelete = document.getElementsByClassName('delete')[0];
let result = document.getElementById('result');
let actualOperation = '';
let previousOperation = '';
let operation = undefined;

Array.from(numbers).forEach(function(button) {
    button.addEventListener('click', function(){
        showNumber(button.innerText);
    })
});

Array.from(operators).forEach(function(button) {
    button.addEventListener('click', function(){
        selectOperator(button.innerText);
    })
});

buttomEqual.addEventListener('click', function(){
    calculate();
    refresh();
});

buttomDelete.addEventListener('click', function(){
    clear();
    refresh();
});

function selectOperator(op){
    if (actualOperation === '') return;
    if (previousOperation !== '') {
        calculate();
    }
    operation = op.toString();
    previousOperation = actualOperation;
    actualOperation = '';
}

function calculate(){
    let cal;
    const previous = parseFloat(previousOperation);
    const actual = parseFloat(actualOperation);
    if (isNaN(previous) || isNaN(actual)) return;

    switch(operation){
        case '/':
            cal = previous / actual;
            break;
        case '*':
            cal = previous * actual;
            break;
        case '+':
            cal = previous + actual;
            break;
        case '-':
            cal = previous - actual;
            break
        default:
            return;
    }    

    actualOperation = cal;
    operation = undefined;
    previousOperation = '';
}

function showNumber(num){
    actualOperation = actualOperation.toString() + num.toString();
    refresh();
};

function clear(){
    actualOperation = '';
    previousOperation = '';
    operation = undefined;
}

function refresh() {
    result.value = actualOperation
}
clear();

