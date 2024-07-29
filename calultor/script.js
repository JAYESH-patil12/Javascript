document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');

    const add = () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        resultDiv.textContent = num1 + num2;
    };

    const subtract = () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        resultDiv.textContent = num1 - num2;
    };

    const multiply = () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        resultDiv.textContent = num1 * num2;
    };

    const divide = () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        if (num2 === 0) {
            resultDiv.textContent = 'Cannot divide by zero';
        } else {
            resultDiv.textContent = num1 / num2;
        }
    };

    document.getElementById('add').addEventListener('click', add);
    document.getElementById('sub').addEventListener('click', subtract);
    document.getElementById('multiply').addEventListener('click', multiply);
    document.getElementById('divide').addEventListener('click', divide);
});
