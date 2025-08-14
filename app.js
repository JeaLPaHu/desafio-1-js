let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}
function mostrarPrompt() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de México:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}

function mostarAlerta(){
    alert("AMO JS");
} 

function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segundoNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segundoNumero;
    alert(`${primerNumero} + ${segundoNumero} = ${resultado}`)
}
