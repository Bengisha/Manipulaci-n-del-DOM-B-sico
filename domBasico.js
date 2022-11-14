// querySelector : SELECCIONAR ETIQUETAS
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const btn2 = document.querySelector('#btnCalcular2');
const btn3 = document.querySelector('#btnCalcular3');
const btn4 = document.querySelector('#btnCalcular4');

const pResultado = document.querySelector('#resultado');

function btnOnClick(){
    //console.log('Escuchando el evento click')
    const sumaInputs = (Number(input1.value) + Number (input2.value)) ;
    pResultado.innerHTML = `Resultado es:  ${sumaInputs}`
}

function btnOnClick2(){
    //console.log('Escuchando el evento click')
    const restaInputs = (Number(input1.value) - Number (input2.value)) ;
    pResultado.innerHTML = `Resultado es:  ${restaInputs}`
}

function btnOnClick3(){
    //console.log('Escuchando el evento click')
    const multiInputs = (Number(input1.value) * Number (input2.value)) ;
    pResultado.innerHTML = `Resultado es:  ${multiInputs}`
}

function btnOnClick4(){
    //console.log('Escuchando el evento click')
    const divInputs = (Number(input1.value) / Number (input2.value)) ;
    pResultado.innerHTML = `Resultado es:  ${divInputs}`
}