let currentInput = '';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = '';
    }
    currentInput += value;
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay('0');
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid operation');
        }
        currentInput = result.toString();
        updateDisplay(currentInput);
    } catch (error) {
        currentInput = '';
        updateDisplay('Error');
    }
}
