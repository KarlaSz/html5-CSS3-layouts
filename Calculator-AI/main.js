let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('display').value = currentInput;
    } catch (error) {
        currentInput = '';
        document.getElementById('display').value = 'Error';
    }
}
