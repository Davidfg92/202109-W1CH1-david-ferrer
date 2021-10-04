//Creo las funciones de las operaciones

function suma(num1, num2){
    return (num1 + num2).toFixed(3).replace(/[.,]000$/, "");
}

function resta(num1, num2){
    return (num1 - num2).toFixed(3).replace(/[.,]000$/, "");
}

function multiplicacion(num1, num2){
    return (num1 * num2).toFixed(3).replace(/[.,]000$/, "");
}

function division(num1, num2){
    return (num1 / num2).toFixed(3).replace(/[.,]000$/, "");
}

function raiz(num1){
    return Math.sqrt(num1).toFixed(3).replace(/[.,]000$/, "");
}


function calculadora(){
    
    let primero = parseFloat(prompt("Escriba el primer número de la operación."));

    //If para avisar que se necesitan escribir números para realizar operaciones.
   
    if (isNaN(primero)){
        alert("Para realizar una operación completa debe de introducir números.");   
    }

    let segundo = parseFloat(prompt(`Escriba el segundo número de la operación.`));

    if (isNaN(segundo)){
        alert("Para realizar una operación completa debe de introducir números.");   
    }

    //If para determinar cuando no son números y que salgan las raíces cuadradas
   
    if (isNaN(primero) && isNaN(segundo)){
        alert("No se pueden hacer operaciones.");
        return calculadora();
    }

    else if (isNaN(primero)){
        alert(`La raíz cuadrada de ${segundo} es ${raiz(segundo)}`);
    }

    else if (isNaN(segundo)){
        alert(`La raíz cuadrada de ${primero} es ${raiz(primero)}`);
    }

    //Creo variables para sacar los resultados de las operaciones y el array para almacenarlos.

    let totalSum, totalRest, totalDiv, totalMult;
    
    totalSum = `El resultado de la suma de ${primero} y ${segundo} es ${suma(primero, segundo)}`;
    totalRest = `El resultado de la resta de ${primero} y ${segundo} es ${resta(primero, segundo)}`;
    totalMult = `El resultado de la multiplicación de ${primero} y ${segundo} es ${multiplicacion(primero, segundo)}`;
    totalDiv = `El resultado de la división de ${primero} y ${segundo} es ${division(primero, segundo)}`;
    
    if (!isNaN(primero) && !isNaN(segundo)){
    console.log(totalSum, totalRest, totalMult, totalDiv);
    }
}

calculadora();
