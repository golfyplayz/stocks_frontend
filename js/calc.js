const submit = document.getElementById('submit');
const stockInt = document.getElementById('stockInt');
const stockFin = document.getElementById('stockFin');
const stockAmt = document.getElementById('stockAmt');
const outputDiv = document.getElementById('output');
const adminButton = document.getElementById('admin');
let header;
let outputAmnt;

const calculate = (inital, final, amount) => {
    let result = (final - inital) * amount;
    return result;
}

function fetchTest() { 
    fetch('https://www.verdoornstocks.net/')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const checkIfShouldRemove = () => {
    if(stockInt.value==='' || stockFin.value==='' || stockAmt.value==='') {
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
    if(!checkIfShouldRemove()) {
        event.preventDefault();
        if(!document.getElementById('outputHeader') && !document.getElementById('outputAmnt')) {
        console.log('clear');
        header = document.createElement('h1');
        outputDiv.appendChild(header);
        header.id = 'outputHeader'
        outputAmnt = document.createElement('h3')
        outputDiv.appendChild(outputAmnt);
        outputAmnt.id = 'outputAmnt';
        }
        if(total >= 0) {
            header.innerHTML = 'Money made';
        } else {
            header.innerHTML = 'Money lost';
        }
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
    fetchTest();
})