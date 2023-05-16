let operator = '';

function setOperator(op) {
    operator = op;
    calc();
}

function sum(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
}

function sub(n1, n2) {
    return parseFloat(n1) - parseFloat(n2);
}

function mult(n1, n2) {
    return parseFloat(n1) * parseFloat(n2);
}

function div(n1, n2) {
    return parseFloat(n1) / parseFloat(n2);
}

function calc() {
    let n1 = document.getElementById("number_1").value;
    let n2 = document.getElementById("number_2").value;
    let result = document.getElementById("result");

    switch(operator) {
        case '+':
            result.innerHTML = sum(n1, n2);
            break;
        case '-':
            result.innerHTML = sub(n1, n2);
            break;
        case '*':
            result.innerHTML = mult(n1, n2);
            break;
        case '/':
            result.innerHTML = div(n1, n2);
            break;
    }
}