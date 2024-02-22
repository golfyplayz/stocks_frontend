const submit = document.getElementById('submit');
const clear = document.getElementById('clear');
let output = document.getElementById('output');

const calculate = (inital, final, amount) => {
    let result = (final - inital) * amount;
    return result;
}
const reset = () => {
    document.getElementById('stockInt').value = '';
    document.getElementById('stockFin').value = '';
    document.getElementById('stockAmt').value = '';
    output.style.visibility = 'hidden';
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    let init = document.getElementById('stockInt').value;
    let fin = document.getElementById('stockFin').value;
    let amnt = document.getElementById('stockAmt').value;
    let total = calculate(init, fin, amnt).toString();
    console.log(total);
    output.style.visibility = 'visible';
    document.getElementById('outputText').innerHTML = total;
})

clear.addEventListener('click', (event) => {
    event.preventDefault();
    reset()
})
