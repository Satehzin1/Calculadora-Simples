const result = document.getElementById("resultado");
const button = document.querySelector("button");
let resultado;

button.addEventListener('click', () =>{

    const prValor = Number(document.getElementById("valor1").value);
    const segValor = Number(document.getElementById("valor2").value);
    const operador = document.getElementById("operador").value;

    switch(operador) {

        case "+": 
            resultado = prValor + segValor;
            break;

        case "-": 
            resultado = prValor - segValor;
            break;

        case "*":
            resultado = prValor * segValor;
            break;
        default: 
            resultado = prValor / segValor;
    }

    result.innerText = resultado;
    
});