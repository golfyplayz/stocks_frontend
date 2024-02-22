const submit = document.getElementById('submit');
const clear = document.getElementById('clear');
const stockInt = document.getElementById('stockInt');
const stockFin = document.getElementById('stockFin');
const stockAmt = document.getElementById('stockAmt');
const outputDiv = document.getElementById('output');

const calculate = (inital, final, amount) => {
    let result = (final - inital) * amount;
    return result;
}

const checkIfOpen = () => {
    if(document.getElementById('outputHeader')) {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }

}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    let init = document.getElementById('stockInt').value;
    let fin = document.getElementById('stockFin').value;
    let amnt = document.getElementById('stockAmt').value;
    let total = calculate(init, fin, amnt).toFixed(2).toString();
    console.log(total);
    let clear = checkIfOpen();
    if(!clear) {
        event.preventDefault();
        console.log('clear');
        let header = document.createElement('h1');
        outputDiv.appendChild(header);
        header.id = 'outputHeader'
        header.innerHTML = 'Money made';
        let outputAmnt = document.createElement('h3')
        outputDiv.appendChild(outputAmnt);
        outputAmnt.id = 'outputAmnt';
        outputAmnt.innerHTML = '$'+total;
    }
    else {
        console.log('div');
        let header = document.getElementById('outputHeader');
        let outputAmnt = document.getElementById('outputAmnt');
        outputAmnt.remove();
        header.remove();
    }
})

clear.addEventListener('click', (event) => {
    event.preventDefault();
    reset()
})
