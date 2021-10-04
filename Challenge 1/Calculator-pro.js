function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return (num1 - num2);
}

function multiplicacion(num1, num2) {
  return (num1 * num2);
}

function division(num1, num2) {
  return (num1 / num2);
}

function calculatorPro() {
  let newNumber;
  let numberList = [];
  let resultadoFinal = 0;

  do {
    newNumber = prompt("Introduzca los números o pulse cancelar");

    if (newNumber !== null) {

      if (isNaN(newNumber) || newNumber == "") {
        alert("Valor introducido inválido");

      }

      else {
        numberList.push(parseFloat(newNumber));

        if (numberList.length === 1) {
          console.log(`La raíz cuadrada es ${Math.sqrt(numberList[0])}`);
        }

        else {
          let sumas = ` El resultado de la suma es ${numberList.reduce(suma).toFixed(3).replace(/[.,]000$/, "")} \n`;
          let restas = `El resultado de la resta es ${numberList.reduce(resta).toFixed(3).replace(/[.,]000$/, "")} \n`;
          let div = `El resultado de la división es ${numberList.reduce(division).toFixed(3).replace(/[.,]000$/, "")} \n`;
          let multi = `El resultado de la multiplicación es ${numberList.reduce(multiplicacion).toFixed(3).replace(/[.,]000$/, "")}`;
          console.log(sumas, restas, div, multi);

        }
      }
    }
  }

  while (newNumber !== null);

  let masOperaciones = confirm("¿Quieres hacer una nueva operación?")

  if (masOperaciones){
    calculatorPro();
    
  }

  else {
    alert("Adiós.")
  }


}

calculatorPro();