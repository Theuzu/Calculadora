///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
function Calculadora(numero1, numero2, operador) {
  num1 = parseFloat(numero1)
  num2 = parseFloat(numero2)


  switch (operador) {

    case "+":

      result = num1 + num2
      break;

    case "-":

      result = num1 - num2
      break;

    case "*":

      result = num1 * num2
      break;

    case "/":

      result = num1 / num2

      break;

    case "e":

      if (num2 === 0) {
        result = 1
      }

      for (let i = 1; i <= num2; i++) {
        resultado *= num1;
      }

      if (num2 < 0) {
        resultado = 1 / resultado
      }
      break;

  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}