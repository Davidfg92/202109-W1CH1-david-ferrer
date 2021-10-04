
//Función para crear vuelos
function crear() {

    if (flights.length <= 15) {

        let destino = prompt(`¿Cuál es el destino del vuelo?`);
        let origen = prompt(`¿Cuál es el origen del vuelo?`);
        let coste = parseFloat(prompt(`¿cuál es el precio del vuelo?`));
        let escala = prompt(`¿Tiene escalas el vuelo? Si o no.`).toLowerCase;

        if (escala === `si` || escala === `sí`) {
            escala = true;
        }

        else {
            escala = false;
        }

        flights.push({ id: flights[flights.length - 1].id + 1, to: destino, from: origen, cost: coste, scale: escala });
        let masVuelos = confirm(`¿Desea añadir más vuelos?`)

        if (masVuelos) {
            crear();
        }
    }

    else {
        alert(`No se pueden introducir más de 15 vuelos.`);
    }
}

//Función para eliminar vuelos
function eliminar() {

    let eliminacion = parseFloat(prompt(`¿Qué ID de vuelo quieres eliminar?`));
    const posicionVuelo = flights.findIndex(posicion => posicion.id === eliminacion);

    if (posicionVuelo === -1) {
        alert(`No existe ese vuelo, pruebe otra vez.`);
        eliminar();
    }

    else {
        flights.splice(posicionVuelo, 1);
        let otroVuelo = confirm(`¿Quieres eliminar otro vuelo?`);

        if (otroVuelo) {
            eliminar();
        }
    }

}

//Función para ordenar de mayor a menor
function mayor() {

    flights.sort((a, b) => b.cost - a.cost);
    flights.forEach(function (mayorQue) {
        console.log(`El vuelo número ${mayorQue.id} con origen en ${mayorQue.from} con destino ${mayorQue.to} a ${mayorQue.cost} euros.`);
    });

    let compraMayor = prompt(`Escriba el número de vuelo que desea comprar`);
    alert(`Gracias por su compra, vuelva pronto.`);

}

//Función para ordenar de menor a mayor
function menor() {

    flights.sort((a, b) => a.cost - b.cost);
    flights.forEach(function (menorQue) {
        console.log(`El vuelo número ${menorQue.id} con origen en ${menorQue.from} con destino ${menorQue.to} a ${menorQue.cost} euros.`);
    });

    let compraMenor = prompt(`Escriba el número de vuelo que desea comprar`);
    alert(`Gracias por su compra, vuelva pronto.`);

}

//Función para preguntar los usuarios
function usuarios() {

    let userAdmin = prompt(`¿Eres ADMIN o eres USER?`).toLowerCase();

    if (userAdmin === `admin`) {
        admin();
    }

    else if (userAdmin === `user`) {
        user();
    }

    else {
        alert(`Debe introducir un usuario correcto`);
        usuarios();
    }
}

//Función para el usuario ADMIN
function admin() {
    let pregunta = prompt(`Escriba \"borrar\" para borrar vuelos o \"crear\" para crear vuelos`).toLowerCase();
    if (pregunta === `borrar`) {
        eliminar();
    }

    else if (pregunta === `crear`) {
        crear();
    }

    else {
        alert(`Escriba \"borrar\" para borrar vuelos o \"crear\" para crear vuelos`)
        admin();
    }

}

//Función para el usuario USER
function user() {
    let pregunta = parseFloat(prompt(`Para ordenar los vuelos: De mayor a menor pulse 1 \nDe menor a mayor pulse 2`));

    if (pregunta > 3 || pregunta === 0 || pregunta === null || isNaN(pregunta)) {
        return user();
    }

    else if (pregunta === 1) {
        mayor();
    }

    else if (pregunta === 2) {
        menor();
    }

}


let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];


//Le pido el nombre y doy la bienvenida

let bienvenida = prompt(`¿Cómo te llamas?`);
if (bienvenida === "") {
    bienvenida = `Invitado`;
}
console.log(`Bienvenido ${bienvenida}.`);


//Muestro los vuelos y filtro antes si tiene o no tiene escala, si tiene escala lo guardo en un array


flights.forEach(function (vuelo) {
    let escala = ``;

    if (vuelo.scale) {
        escala = `realiza escala`;
    }

    else {
        escala = `no realiza escala`;
    }

    console.log(`El vuelo con origen en ${vuelo.from} con destino ${vuelo.to} tiene un coste de ${vuelo.cost} y ${escala}.`);
});


//Le muestro al usuario el coste medio

let costeMedio = flights.reduce((total, flights) => total + flights.cost, 0);
console.log(`El coste medio de los vuelos es de ${(costeMedio / flights.length).toFixed(2)}`);

//Le digo cuantos vuelos tienen escala

console.log(`Hay ${flights.filter(vuelo => vuelo.scale).length} vuelos con escala.`);



// Numero de vuelos a mostrar empezando desde el final
let numeroUltimosVuelos = 5;

//Muestro los 5 últimos vuelos del día ordenando el array
flights.sort((a, b) => a.id - b.id);

console.log(`Los ultimos vuelos del día son: \n`);

for (i = flights.length - 1; i >= flights.length - numeroUltimosVuelos; i--) {
    console.log(`Vuelo con destino a ${flights[i].to} con origen en ${flights[i].from}`);
}

usuarios();




