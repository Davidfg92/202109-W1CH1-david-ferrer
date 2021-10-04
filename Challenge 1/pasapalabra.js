//Pasapalabra David Ferrer (cambio mi cerebro e intento poner los nombres en inglés)
//Creo un array con las letras, las preguntas y las respuestas

const rosco = [
  {
    letter: "A",
    status: 0,
    questions: [
      {
        question:
          "Con la A: Conjunto de las letras de un idioma puestas en orden.",
        answer: "Abecedario",
      },
      {
        question:
          "Con la A: Medio de transporte de personas o mercancías que va por el aire.",
        answer: "Avión",
      },
      {
        question: "Con la A: Rodear con los brazos.",
        answer: "Abrazar",
      },
    ],
  },

  {
    letter: "B",
    status: 0,
    questions: [
      {
        question:
          "Con la B: Tela que se pone a los bebés en el pecho para que no se manchen al comer.",
        answer: "Babero",
      },
      {
        question:
          "Con la B: Personaje de cuento que estaba acompañada de siete enanitos.",
        answer: "Blancanieves",
      },
      {
        question: "Con la B: Traje que se usa para bañarse.",
        answer: "Bañador",
      },
    ],
  },

  {
    letter: "C",
    status: 0,
    questions: [
      {
        question:
          "Con la C: Parte superior del cuerpo que está sobre el cuello.",
        answer: "Cabeza",
      },
      {
        question:
          "Con la C: Fruto seco de color marrón oscuro por fuera y blanco por dentro.",
        answer: "Castaña",
      },
      {
        question:
          "Con la C: Planta de tallo grueso y verde con muchas espinas, y que casi no necesita agua.",
        answer: "Cactus",
      },
    ],
  },

  {
    letter: "D",
    status: 0,
    questions: [
      {
        question:
          "Con la D: Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados, sin darnos cuenta de nada.",
        answer: "Dormir",
      },
      {
        question:
          "Con la D: Lugar en el que hace muchísimo calor, en donde apenas llueve, lleno de arena, y donde casi no hay vegetación.",
        answer: "Desierto",
      },
      {
        question:
          "Con la D: Cada una de las piezas blancas y duras de la boca que sirve para masticar.",
        answer: "Diente",
      },
    ],
  },

  {
    letter: "E",
    status: 0,
    questions: [
      {
        question:
          "Con la E: Animal mamífero enorme, de color marrón o gris, que vive en Asia o África, y que tiene trompa y grandes orejas.",
        answer: "Elefante",
      },
      {
        question:
          "Con la E: Lo que les pasa a algunas ropas cuando las lavas con agua muy caliente.",
        answer: "Encogen",
      },
      {
        question: "Con la E: Animal mamífero con el cuerpo cubierto de púas.",
        answer: "Erizo",
      },
    ],
  },

  {
    letter: "F",
    status: 0,
    questions: [
      {
        question:
          "Con la F: Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos.",
        answer: "Fiebre",
      },
      {
        question: "Con la F: Alguien que no es guapo.",
        answer: "Feo",
      },
      {
        question:
          "Con la F: Dicho de un animal que es muy peligroso para las personas.",
        answer: "Feroz",
      },
    ],
  },

  {
    letter: "G",
    status: 0,
    questions: [
      {
        question:
          "Con la G: Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda.",
        answer: "Globo",
      },
      {
        question:
          "Con la G: Ave doméstica, de la que nos comemos sus huevos y su carne.",
        answer: "Gallina",
      },
      {
        question: "Con la G: Mono africano de gran tamaño.",
        answer: "Gorila",
      },
    ],
  },

  {
    letter: "H",
    status: 0,
    questions: [
      {
        question: "Con la H: Lo que sale cuando se hace un fuego.",
        answer: "Humo",
      },
      {
        question:
          "Con la H: Agua que se ha vuelto sólida cuando ha hecho mucho frío.",
        answer: "Hielo",
      },
      {
        question:
          "Con la H: Vehículo que vuela y que tiene una gran hélice arriba.",
        answer: "Helicóptero",
      },
    ],
  },

  {
    letter: "I",
    status: 0,
    questions: [
      {
        question:
          "Con la I: Lugar en el que se hacen las misas, las bodas, los bautizos, las comuniones,...",
        answer: "Iglesia",
      },
      {
        question:
          "Con la I: Objeto magnético que puede atraer al hierro y a otros metales.",
        answer: "Imán",
      },
      {
        question: "Con la I: Llenar algo de aire.",
        answer: "Inflar",
      },
    ],
  },

  {
    letter: "J",
    status: 0,
    questions: [
      {
        question:
          "Con la J: Zona que rodea algunas casas o edificios y que está lleno de césped, flores, árboles...",
        answer: "Jardín",
      },
      {
        question: "Con la J: Mamífero africano de patas y cuello larguísimo.",
        answer: "Jirafa",
      },
      {
        question:
          "Con la J: Sustancia que huele muy bien y que usamos para lavar con agua.",
        answer: "Jabón",
      },
    ],
  },

  {
    letter: "K",
    status: 0,
    questions: [
      {
        question: "Con la K: Medida de peso que es igual que 1000 gramos.",
        answer: "Kilogramo",
      },
      {
        question:
          "Con la K: Fruta de piel marrón con pelitos, verde por dentro con semillas negras, y de sabor dulce y un poco ácido.",
        answer: "Kiwi",
      },
      {
        question:
          "Con la K: Mamífero pequeño de color gris, que tiene una bolsa en la espalda para llevar a sus crías.",
        answer: "Koala",
      },
    ],
  },

  {
    letter: "L",
    status: 0,
    questions: [
      {
        question:
          "Con la L: Satélite de la Tierra, de color blanco, que se ve por la noche.",
        answer: "Luna",
      },
      {
        question: "Con la L: Gotas que nos caen de los ojos.",
        answer: "Lagrimas",
      },
      {
        question: "Con la L: Que se mueve muy despacio.",
        answer: "Lento",
      },
    ],
  },

  {
    letter: "M",
    status: 0,
    questions: [
      {
        question: "Con la M: Tela que se pone en las mesas a la hora de comer.",
        answer: "Mantel",
      },
      {
        question: "Con la M: Que ya no está vivo.",
        answer: "Muerto",
      },
      {
        question:
          "Con la M: Prenda parecida a un guante, pero sin separar los dedos.",
        answer: "Manopla",
      },
    ],
  },

  {
    letter: "N",
    status: 0,
    questions: [
      {
        question:
          "Con la N: Tipo de casa que construyen los pájaros para poner sus huevos.",
        answer: "Nido",
      },
      {
        question: "Con la N: Cielo lleno de nubes y sin sol.",
        answer: "Nublado",
      },
      {
        question: "Con la N: Caer la nieve.",
        answer: "Nevar",
      },
    ],
  },

  {
    letter: "Ñ",
    status: 0,
    questions: [
      {
        question:
          "Con la Ñ: Mamífero africano de color marrón parecido a un toro con los cuernos curvos.",
        answer: "Ñu",
      },
      {
        question:
          "Con la Ñ: Ave de América parecida al avestruz pero más pequeña.",
        answer: "Ñandú",
      },
      {
        question:
          "Contiene la Ñ: Madera de los árboles que se corta en trozos para hacer fuego.",
        answer: "Leña",
      },
    ],
  },

  {
    letter: "O",
    status: 0,
    questions: [
      {
        question:
          "Con la O: Órgano del sentido de la vista. Lo que usamos para ver.",
        answer: "Ojo",
      },
      {
        question:
          "Con la O: Agujero alargado que se hace en la ropa para abrochar un botón.",
        answer: "Ojal",
      },
      {
        question:
          "Con la O: Pequeño agujero que se encuentra en el centro de la tripa.",
        answer: "Ombligo",
      },
    ],
  },

  {
    letter: "P",
    status: 0,
    questions: [
      {
        question:
          "Con la P: Animales que viven en el agua, cubiertos de escamas, con aletas para nadar.",
        answer: "Peces",
      },
      {
        question:
          "Con la P: Instrumento que sirve para protegerse de la lluvia.",
        answer: "Paraguas",
      },
      {
        question:
          "Con la P: Instrumento de pintura con un mango largo y pelos en el extremo.",
        answer: "Pincel",
      },
    ],
  },

  {
    letter: "Q",
    status: 0,
    questions: [
      {
        question:
          "Con la Q: Alimento de color amarillento que se fabrica con leche",
        answer: "Queso",
      },
      {
        question:
          "Con la Q: Caseta en la que venden periódicos, revistas, tebeos, chuches,...",
        answer: "Quiosco",
      },
      {
        question:
          "Con la Q: Sentir amor o cariño por algo o alguien. Desear algo.",
        answer: "Querer",
      },
    ],
  },

  {
    letter: "R",
    status: 0,
    questions: [
      {
        question: "Con la R: Veloz.",
        answer: "Rápido",
      },
      {
        question:
          "Con la R: Especie de barras sobre las que se mueven los trenes en las vías.",
        answer: "Raíles",
      },
      {
        question: "Con la R: Que tiene mucho dinero.",
        answer: "Rico",
      },
    ],
  },

  {
    letter: "S",
    status: 0,
    questions: [
      {
        question:
          "Con la S: Lo que usas para que tus lápices tengan la punta afilada.",
        answer: "Sacapuntas",
      },
      {
        question: "Con la S: Pasar de dentro a fuera.",
        answer: "Salir",
      },
      {
        question:
          "Con la S: Fruto grande, redondo y jugoso, de color verde oscuro por fuera y rojo por dentro.",
        answer: "Sandía",
      },
    ],
  },

  {
    letter: "T",
    status: 0,
    questions: [
      {
        question:
          "Con la T: Objeto que se usa para pinchar los alimentos y comérselos.",
        answer: "Tenedor",
      },
      {
        question: "Con la T: Tela en forma de red que hacen las arañas.",
        answer: "Telaraña",
      },
      {
        question: "Con la T: Colgar la ropa para que se seque.",
        answer: "Tender",
      },
    ],
  },

  {
    letter: "U",
    status: 0,
    questions: [
      {
        question: "Con la U: Parte dura que está en la punta de los dedos.",
        answer: "Uña",
      },
      {
        question: "Con la U: Traje que algunas personas llevan en su trabajo.",
        answer: "Uniforme",
      },
      {
        question: "Con la U: Fruta de la que se extrae el vino.",
        answer: "Uva",
      },
    ],
  },

  {
    letter: "V",
    status: 0,
    questions: [
      {
        question: "Con la V: Estación del año en la que hace mucho calor.",
        answer: "Verano",
      },
      {
        question: "Con la V: Aparato que gira y que sirve para dar aire.",
        answer: "Ventilador",
      },
      {
        question:
          "Con la V: Persona que vive en el mismo barrio o edificio que otra.",
        answer: "Vecino",
      },
    ],
  },

  {
    letter: "W",
    status: 0,
    questions: [
      {
        question:
          "Con la W: Deporte que se practica en el mar, de pie sobre una tabla alargada que lleva una vela triangular.",
        answer: "Windsurf",
      },
      {
        question: "Con la W: Bebida alcohólica.",
        answer: "Whisky",
      },
      {
        question:
          "Con la W: Deporte que consiste en jugar en una piscina con un balón.",
        answer: "Waterpolo",
      },
    ],
  },

  {
    letter: "X",
    status: 0,
    questions: [
      {
        question:
          "Contiene la X: Coche con conductor que lleva a las personas donde quieren ir y les cobra según los kilómetros recorridos.",
        answer: "Taxi",
      },
      {
        question: "Contiene la X: Persona de otro país.",
        answer: "Extranjero",
      },
      {
        question: "Contiene la X: Lo contrario de “interior”.",
        answer: "Exterior",
      },
    ],
  },

  {
    letter: "Y",
    status: 0,
    questions: [
      {
        question: "Con la Y: Barco de lujo.",
        answer: "Yate",
      },
      {
        question: "Con la Y: Parte amarilla del huevo.",
        answer: "Yema",
      },
      {
        question: "Con la Y: Hembra del caballo.",
        answer: "Yegua",
      },
    ],
  },

  {
    letter: "Z",
    status: 0,
    questions: [
      {
        question:
          "Con la Z: Parque en el que hay todo tipo de animales de todo el mundo que se pueden visitar.",
        answer: "Zoo",
      },
      {
        question: "Con la Z: Lo que nos ponemos en los pies.",
        answer: "Zapatos",
      },
      {
        question:
          "Con la Z: Que tiene más habilidad con la mano izquierda que con la derecha.",
        answer: "Zurdo",
      },
    ],
  },
];

function pasapalabra() {
  let ranking = [
    { name: "Manolo", points: 16 },
    { name: "Federico", points: 21 },
    { name: "Adolfo", points: 12 },
  ];

  let sucess = 0;
  let fail = 0;

  alert("¿Estás preparado?");
  let username = prompt("¿Cómo te llamas?");
  if (username === "") {
    username = "Invitado";
  }
  let nameAndPoints = { name: username, points: sucess };

  let numberQuestion = getRandomInt();

  roundQuestions(rosco);

  let questionConfirm = confirm(`¿Quieres jugar otra vez?`);
  if (questionConfirm) {
    pasapalabra();
  } else {
    return;
  }

  function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

  function showRanking() {
    alert(`En consola se muestra el ranking actual.`);
    ranking.sort((a, b) => b.points - a.points);
    console.table(ranking);
  }
  function checkQuestion(question) {
    if (question.status === 0) {
      let questionToPlay = question.questions[numberQuestion].question;
      let answer = eliminarDiacriticos(
        question.questions[numberQuestion].answer
      );
      let input = prompt(questionToPlay);

      if (input == null) {
        return;
      }

      input = eliminarDiacriticos(input);

      switch (input) {
        case "END":
          alert(
            `Has acabado con ${sucess} aciertos y ${fail} fallos. Para entrar en el ranking debes acabar el rosco.`
          );
          return;
          break;

        case "":
          return checkQuestion(question);
          break;

        case answer:
          alert(`CORRECTO`);
          question.status = 1;
          sucess++;
          break;

        case "PASAPALABRA":
          question.status = 0;
          break;

        default:
          alert(`FALLO! La respuesta es ${answer}`);
          question.status = 2;
          fail++;
      }
    }
  }
  function roundQuestions(rosco) {
    for (i = 0; i < rosco.length; i++) {
      checkQuestion(rosco[i]);
    }
    if (sucess === rosco.length) {
      alert(
        `Enhorabuena, has terminado el rosco sin ningún fallo! Tu premio es entrar en Skylab Coders gratis!!!!`
      );
      ranking.push(nameAndPoints);
      showRanking();
      return;
    } else if (sucess + fail === rosco.length) {
      alert(
        `Enhorabuena, has completado el rosco. Tienes ${sucess} aciertos y ${fail} fallos`
      );
    }

    if (rosco.filter((rosco) => rosco.status === 0).length > 0) {
      roundQuestions(rosco);
    }
  }

  function eliminarDiacriticos(texto) {
    return texto
      .toUpperCase()
      .normalize("NFD")
      .replace(
        /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
        "$1"
      )
      .normalize();
  }
}
pasapalabra();
