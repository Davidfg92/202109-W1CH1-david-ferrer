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





