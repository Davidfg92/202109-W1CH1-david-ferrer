bingo();

function bingo() {
  let cantadoLinea = false;
  let bomboNums = [];
  let ranking = [
    { name: "Juan", points: 68 },
    { name: "Pablo", points: 71 },
    { name: "Aitor", points: 50 },
  ];

  while (confirm("Bienvenido al bingo de Skylab Coders. ¿Quieres jugar?")) {
    let jugadorActual = crearJugador();
    ordenarMostrarRanking();
    let nums = parseFloat(prompt(`¿Cuántos números quieres?`));
    let carton = [];
    do {
      carton = creaCarton(nums);
      console.table(carton);
    } while (!confirm(`¿Quieres continuar con este cartón?`));

    alert(`QUE COMIENCE LA PARTIDA`);

    while (!bingoCompleto(carton)) {
      if (confirm(`¿Quieres un número?`)) {
        jugadorActual.points--;
        añadirNumeroBombo(bomboNums);
        console.log(`Número ${bomboNums[bomboNums.length - 1]}`);
        comprobrarNumero(carton, bomboNums[bomboNums.length - 1]);
        console.table(carton);
        if (!cantadoLinea) {
          cantadoLinea = comprobarLinea(carton);
          if (cantadoLinea) {
            alert(`ES LÍNEA!`);
          }
        }
      }
      else {
        alert("Hasta pronto")
        return
      }
    }
    ganadorBingo(jugadorActual);
  }

  function crearJugador() {
    let nombre = prompt(`¿Cuál es tu nombre?`);
    alert(`Bienvenido al bingo de Skylab Coders, ${nombre}`);
    let jugadorActual = { name: nombre, points: 100 };
    return jugadorActual;
  }

  function ordenarMostrarRanking() {
    alert(`En consola se muestra el ranking actual.`);
    ranking.sort((a, b) => b.points - a.points);
    console.table(ranking);
  }

  function creaCarton(cantidadDeNumeros) {
    let carton = [];
    let numerosPorFila = Math.ceil(Math.sqrt(cantidadDeNumeros));
    let cantidadDeFilas = Math.ceil(cantidadDeNumeros / numerosPorFila);

    for (let k = 0; k < cantidadDeFilas; k++) {
      carton[k] = [];
    }

    for (let i = 0; i < cantidadDeNumeros; i++) {
      let fila = Math.floor(i / numerosPorFila);
      carton[fila].push(nuevoNumero(carton));
    }

    return carton;
  }

  function nuevoNumero(carton) {
    let random = getRandomInt(1, 100);

    if (comprobarNumeroDuplicado(carton, random)) {
      return nuevoNumero(carton);
    } else {
      return random;
    }
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function añadirNumeroBombo(bombo) {
    let nuevoNumero = getRandomInt(1, 100);
    if (bombo.indexOf(nuevoNumero) === -1) {
      bombo.push(nuevoNumero);
    } else {
      añadirNumeroBombo(bombo);
    }
  }

  function comprobarNumeroDuplicado(carton, random) {
    for (let i = 0; i < carton.length; i++) {
      if (carton[i].includes(random)) {
        return true;
      }
    }

    return false;
  }

  function comprobrarNumero(carton, numero) {
    for (i = 0; i < carton.length; i++) {
      for (k = 0; k < carton[i].length; k++) {
        if (carton[i][k] === numero) {
          carton[i][k] = "X";
        }
      }
    }
  }

  function comprobarLinea(carton) {
    for (let i = 0; i < carton.length; i++) {
      if (
        carton[i].every((x) => {
          return x === "X";
        })
      ) {
        return true;
      }
    }
    return false;
  }

  function bingoCompleto(carton) {
    for (let i = 0; i < carton.length; i++) {
      if (
        !carton[i].every((x) => {
          return x === "X";
        })
      ) {
        return false;
      }
    }
    return true;
  }

  function ganadorBingo(jugador){
    ranking.push(jugador)
    alert(`BINGO!! FELICIDADES!!`);
    alert(`Te mostramos como queda el ranking.`)
    ordenarMostrarRanking();
  }
}
