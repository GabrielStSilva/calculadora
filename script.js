let result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function deleteLastChar() {
    result.value = result.value.slice(0, -1);
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Erro';
    }
}