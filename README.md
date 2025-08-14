# Hora del Desafío

Este proyecto es una práctica de JavaScript enfocada en el uso de funciones, manipulación del DOM y eventos.  
Se basa en un desafío que consiste en implementar interacciones dinámicas en una página HTML a través de botones que ejecutan diferentes funciones.

## 📌 Objetivo del Proyecto
Practicar:
- Uso de **`document.querySelector`** para seleccionar y modificar elementos del DOM.
- Creación y ejecución de funciones en JavaScript.
- Uso de **eventos** (atributo `onclick`) para vincular botones con funciones.
- Interacción con el usuario mediante `console.log`, `alert` y `prompt`.
- Conversión de datos de entrada (`parseInt`).

---

## 🚀 Funcionalidades Implementadas

1. **Modificar contenido del título**
   ```javascript
   let titulo = document.querySelector('h1');
   titulo.innerHTML = 'Hora del Desafío';

Al cargar la página, el texto del <h1> cambia a "Hora del Desafío".

2.Mostrar mensaje en la consola

function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}
Botón: Console → Al hacer clic, se muestra el mensaje en la consola.

3.Mostrar alerta con una ciudad ingresada por el usuario

function mostrarPrompt() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de México:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}
Botón: Prompt → Solicita una ciudad y muestra el mensaje con la respuesta.

4. Mostrar mensaje "AMO JS"

function mostarAlerta(){
    alert("AMO JS");
}
Botón: Alert → Muestra el mensaje "AMO JS".

5.Suma de dos números ingresados

function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segundoNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segundoNumero;
    alert(`${primerNumero} + ${segundoNumero} = ${resultado}`);
}
Botón: Suma → Solicita dos números y muestra el resultado de su suma.

🛠 Tecnologías Utilizadas

HTML → Estructura de la página.
CSS3 → Estilos (en style.css).
JavaScript → Lógica e interactividad.

✨ Aprendizajes

Cómo seleccionar y modificar elementos HTML desde JavaScript.
Cómo vincular eventos con funciones.
Cómo solicitar y procesar datos del usuario.
Diferencia entre innerHTML y console.log.
Conversión de cadenas a números con parseInt.

✍ Autor: Jesús Palet
📅 Fecha: 2025
