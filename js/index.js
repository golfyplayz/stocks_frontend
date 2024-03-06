const submit = document.getElementById('submit');
const stockInt = document.getElementById('stockInt');
const stockFin = document.getElementById('stockFin');
const stockAmt = document.getElementById('stockAmt');
const outputDiv = document.getElementById('output');
const adminButton = document.getElementById('admin');
const adminButton = document.getElementById('admin');

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
        if(total >= 0) {
            header.innerHTML = 'Money made';
        } else {
            header.innerHTML = 'Money lost';
        }
        let outputAmnt = document.createElement('h3')
        outputDiv.appendChild(outputAmnt);
        outputAmnt.id = 'outputAmnt';
        if (total[0] === '-') {
            total = total.substr(1);
            outputAmnt.innerHTML = '-$'+total;
        } else {
            outputAmnt.innerHTML = '$'+total;
        }
    }
    else {
        console.log('div');
        let header = document.getElementById('outputHeader');
        let outputAmnt = document.getElementById('outputAmnt');
        outputAmnt.remove();
        header.remove();
    }
})

adminButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'admin.html';
})