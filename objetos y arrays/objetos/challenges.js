/*------------------
1)
Completa l'objecte de sota.
Afegeix-li 3 parelles de "key/value"!
------------------*/
/* const person = {
  name: "Sofia",
  age: 20,
  height: 1.65,
  eyes: 'Blue',
  hair: 'Brunette'
};

console.log(person); */

/*------------------
2)
Accedeix al value "name" de l'objecte "person".
Pista: pots fer servir la "dot notation" o la "bracket notation".
------------------*/

// console.log("The person's name is:", person.name);

/*------------------
3)
Actualitza el "name" de "person" a "Marco".
No canviïs l'objecte original sino que
reassigna el valor de "name". Si ho fas correctament,
la següent frase hauria d'imprimir "true".
------------------*/
/* person.name = "Marco";
console.log("The person's name has been updated:", (person.name === "Marco")); */

/*------------------
4)
Arregla el següent codi per què imprimeixi
el que s'espera!
------------------*/

/* const book = {
  isbn: "9781593275846",
  title: "Eloquent JavaScript, Second Edition",
  subtitle: "A Modern Introduction to Programming",
  author: "Marijn Haverbeke",
  published: "2014-12-14T00:00:00.000Z",
  publisher: "No Starch Press",
  pages: 472,
  description:
    "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  website: "http://eloquentjavascript.net/",
};
 */
// console.log("The book ", book, " was written by ", author, " and is ", pages, "pages.");
// console.log(`The book: '${book.title}', was written by ${book.author} and has ${book.pages} pages.`);

/*------------------
5)
És hora d'aprendre una cosa nova! Hi ha una nova forma
d'escriure un "string" - se'n diu "template literal".
1) Encapsula tot l'"string" en "backticks": ``
2) Si en cap moment vols afegir JavaScript (o el nom d'una variable),
encapsula aquella part amb el símbol del dòlar i les claus: ${}
3) Se sobreentén que la resta són "strings"!
Pots aprendre'n més a:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Emplena la declaració de sota. A partir d'ara, als console.logs alternarem entre
"template literals" i "quotations".
------------------*/

// console.log(`The book ${book.title} was written by ${} and is ${} pages.`);

/*------------------
6)
Arregla el següent codi per què imprimeixi
el que s'espera! Pots fer servir la "dot notation"
o la "bracket notation" - revisa les slides si
has oblidat com accedir als valors dels "nested objects".
------------------*/

/* const user = {
  id: 101,
  email: "sofia@dev.com",
  personalInfo: {
    name: "Sofia",
    address: {
      line1: "Carrer de CodeOp",
      line2: "42",
      city: "Barcelona",
      country: "Spain",
    },
  },
};

console.log(`${user.personalInfo.name} lives at ${user.personalInfo.address.line1} ${user.personalInfo.address.line2}, ${user.personalInfo.address.city}, ${user.personalInfo.address.country}.`);
 */
/*------------------
7)
Actualitza l'email i l'adreça de l'usuari
per què el console.log imprimeixi "true"!

El nou email hauria de ser "sofia@prod.com"
i la nova ciutat hauria de ser "Madrid".
------------------*/
/* user.email = "sofia@prod.com";
user.personalInfo.address.city = "Madrid";
console.log("The person's email and city has been updated:", (user.email === "sofia@prod.com") && (user.personalInfo.address.city === "Madrid"));
 */
/*------------------
8)
Crea un nou objecte des de zero i anomena'l "animal".
Després, escull un animal i descriu-lo - inclou elements
com el color, el tipus, el que menja, etc.
Fes un "nested object" com a mínim.
------------------*/
/* const animal = {
  animal: 'falcon',
  color: ['white', 'brown', `black`],
  tipe: {
    family:'birds', 
    role: 'predator', 
    strenghts: ['speed', 'vision', 'claws', 'flying'] 
  },
  food: ['rats', 'worms', 'snakes'],
}
console.log(`The data type of ${animal} is a ${typeof animal}`);
 */
/*------------------
9)
Actualitza com a mínim un valor del teu objecte.
Escriu els teus propis console.logs per verificar
els canvis. (per agafar idees, pots fer un cop d'ull
a les preguntes 3 i 6).
------------------*/
/* animal.animal = 'eagle';
animal.tipe.role = `king`;
animal.food.push('rabbits');
console.log(`falcon its now an ${animal.animal}. Eagles are the ${animal.tipe.role} of the predators. Eagles also eat ${animal.food[3]}`);
console.log(`The data type of ${animal} is a ${typeof animal}`);
 */
/*------------------
10)
Hi ha tres errors en el següent objecte.
Troba'ls i arregla'ls!
------------------*/

/* const user2 = {
  id: 102,
  email: "pedro@dev.com",
  personalInfo: {
      name: 'Pedro',
      address: {
          line1: "Carrer de CodeOp",
          line2: "42",
          city: "Barcelona",
          country: "Spain"
      }
  }
}; */

/*------------------
11)
Torna a revisar tot el teu codi anterior.
Descomenta cada línia on hagis fet servir
la "dot notation" i la "bracket notation"
i reescriu el codi fent servir el sistema contrari.
Assegura't de que el teu codi segueix funcionant!
------------------*/

// EJERCICIOS CCOMPLEJOS OBJETOS
////////////////////////////////////////////////////////////////////////////////


/* let randomObject ={
  "halfway": -597578084,
  "oldest": "limited",
  "them": {
	"swimming": "ancient",
	"stick": "battle",
	"vast": true,
	"pain": "cent",
	"changing": -1097468956.0542688,
	"dear": -1768732428,
	"good": "front",
	"youth": true,
	"meant": "settlers",
	"speed": {
  	"strip": "creature",
  	"blanket": -1892428548.752131,
  	"previous": false,
  	"later": true,
  	"past": {
    	"program": {
      	"writer": 1653937677.0210853,
      	"pot": true,
      	"noon": -365598494,
      	"cotton": -941609260,
      	"grade": {
        	"right": "aloud",
        	"addition": {
          	"said": false,  
          	"meat": -1370461956.452456,
          	"whose": {
            	"tail": false,
            	"phrase": false,
            	"national": {
              	"stairs": 913907191.8412454,
              	"fat": 576639131.2840135,
              	"younger": "best",
              	"cannot": {
                	"with": "fireplace",
                	"prepare": false,
                	"spin": -1979219779.0387182,
                	"hair": 1100726724,
                	"within": true,
                	"metal": 461166658,
                	"bent": false,
                	"cheese": -176132480,
                	"speech": 1035936928.1533735,
                	"motor": "breath",
                	"composed": true,
                	"board": "broken"
              	},
              	"space": "average",
              	"top": 1563102285.049974,
              	"problem": -102484870,
              	"circle": true,
              	"dust": true,
              	"organized": -939311229,
              	"production": 1047760167.1780465,
              	"shop": false
            	},
            	"taught": false,
            	"disease": false,
            	"volume": "mixture",
            	"laugh": "capital",
            	"design": 1190722490,
            	"proud": -212718583.10419846,
            	"shoulder": -239291513,
            	"height": true,
            	"blank": false
          	},
          	"sitting": false,
          	"silk": true,
          	"buffalo": "whom",
          	"silly": 499953376.84782386,
          	"globe": -1930898253,
          	"soldier": -589507257.4907248,
          	"of": -1805357958,
          	"rising": true,
          	"except": false
        	},
        	"mouse": "our",
        	"cookies": "made",
        	"common": false,
        	"low": false,
        	"answer": false,
        	"visitor": "wherever",
        	"space": 988316177,
        	"coast": 191721382,
        	"angry": "gravity",
        	"raise": "owner"
      	},
      	"keep": "similar",
      	"become": 729169929.9094012,
      	"tropical": "mighty",
      	"chief": true,
      	"same": "ride",
      	"stove": -847784517,
      	"noise": "fresh"
    	},
    	"medicine": false,
    	"hungry": true,
    	"weight": 290720785,
    	"almost": "monkey",
    	"join": "slave",
    	"hold": "street",
    	"plastic": false,
    	"sat": -1498494707,
    	"nervous": false,
    	"ordinary": 2119960819.7494817,
    	"lamp": 1994320371
  	},
  	"stuck": true,
  	"broad": "manufacturing",
  	"eight": 78027487.2616241,
  	"won": true,
  	"master": 1844006759,
  	"would": false,
  	"brought": -297330857
	},
	"hundred": false,
	"edge": 1399498305.5665278
  },
  "aloud": true,
  "bend": "these",
  "enjoy": -951714012,
  "brass": -938753103,
  "cheese": 1488077759,
  "visit": "act",
  "information": true,
  "chosen": true,
  "improve": true
}


console.log(randomObject.them.speed.past.program.grade.addition.whose.national.cannot.board);
randomObject.them.speed.past.program.grade.addition.whose.national.cannot.drink = "Coca-cola";
console.log(randomObject.them.speed.past.program.grade.addition.whose.national.cannot.drink);
let nombre = prompt("Dime tu nombre").trim().toLowerCase();
randomObject.them.speed.past.program.grade.addition.whose.national.cannot.name = nombre;
let randomKeys = Object.keys(randomObject.them.speed.past.program.grade.addition.whose.national.cannot);
console.log(`${randomKeys[randomKeys.length -1]}: ${randomObject.them.speed.past.program.grade.addition.whose.national.cannot.name}`);
console.log(randomKeys); */




// SUPERHEROES/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

let letraNombre = {
  "a": {

      masculino: "La bestia",
      femenino: "La bestia",
  },
  "b": {

      masculino: "Agente",
      femenino: "Agente",
  },
  "c": {

      masculino: "Gigante",
      femenino: "Gigante",
  },
  "d": {

      masculino: "Pokemon",
      femenino: "Pokemon",
  },
  "e": {

      masculino: "Dragón",
      femenino: "Dragón",
  },
  "f": {

      masculino: "Alien",
      femenino: "Alien",
  },
  "g": {

      masculino: "Fantasma",
      femenino: "Fantasma",
  },
  "h": {

      masculino: "Doctor",
      femenino: "Doctora",
  },
  "i": {

      masculino: "Genio",
      femenino: "Genia",
  },
  "j": {

      masculino: "Chico",
      femenino: "Chica",
  },
  "k": {

      masculino: "Príncipe",
      femenino: "Princesa",
  },
  "l": {

      masculino: "Hombre",
      femenino: "Mujer",
  },
  "m": {

      masculino: "Gatito",
      femenino: "Gatita",
  },
  "n": {

      masculino: "Borracho",
      femenino: "Borracha",
  },
  "o": {

      masculino: "Rey",
      femenino: "Reina",
  },
  "p": {

      masculino: "Robot",
      femenino: "Robot",
  },
  "q": {

      masculino: "Científico",
      femenino: "Científica",
  },
  "r": {

      masculino: "Samurai",
      femenino: "Samurai",
  },
  "s": {

      masculino: "Mole",
      femenino: "Mole",
  },
  "t": {

      masculino: "Loco",
      femenino: "Loca",
  },
  "u": {

      masculino: "Vigilante",
      femenino: "Vigilante",
  },
  "v": {

      masculino: "Guerrero",
      femenino: "Guerrera",
  },
  "w": {

      masculino: "León",
      femenino: "Leona",
  },
  "x": {

      masculino: "Ángel",
      femenino: "Ángel",
  },
  "y": {

      masculino: "Tigre",
      femenino: "Tigresa",
  },
  "z": {

      masculino: "Saiyajin",
      femenino: "Saiyajin",
  },
};

let letraApellido = {
  "a": {

      masculino: "indestructible",
      femenino: "indestructible",
  },
  "b": {

      masculino: "maravilla",
      femenino: "maravilla",
  },
  "c": {

      masculino: "radiactivo",
      femenino: "radiactiva",
  },
  "d": {

      masculino: "volador",
      femenino: "voladora",
  },
  "e": {

      masculino: "mágico",
      femenino: "mágica",
  },
  "f": {

      masculino: "salvaje",
      femenino: "salvaje",
  },
  "g": {

      masculino: "vengador",
      femenino: "vengadora",
  },
  "h": {

      masculino: "letal",
      femenino: "letal",
  },
  "i": {

      masculino: "poderoso",
      femenino: "poderosa",
  },
  "j": {

      masculino: "amoroso",
      femenino: "amorosa",
  },
  "k": {

      masculino: "oscuro",
      femenino: "oscura",
  },
  "l": {

      masculino: "fantástico",
      femenino: "fantástica",
  },
  "m": {

      masculino: "invencible",
      femenino: "invencible",
  },
  "n": {

      masculino: "valiente",
      femenino: "valiente",
  },
  "o": {

      masculino: "superveloz",
      femenino: "superveloz",
  },
  "p": {

      masculino: "invisible",
      femenino: "invisible",
  },
  "q": {

      masculino: "mutante",
      femenino: "mutante",
  },
  "r": {

      masculino: "tóxico",
      femenino: "tóxica",
  },
  "s": {

      masculino: "sexy",
      femenino: "sexy",
  },
  "t": {

      masculino: "asesino",
      femenino: "asesina",
  },
  "u": {

      masculino: "karateka",
      femenino: "karateka",
  },
  "v": {

      masculino: "galáctico",
      femenino: "galáctica",
  },
  "w": {

      masculino: "carismático",
      femenino: "carismática",
  },
  "x": {

      masculino: "violento",
      femenino: "violenta",
  },
  "y": {

      masculino: "nocturno",
      femenino: "nocturna",
  },
  "z": {

      masculino: "venenoso",
      femenino: "venenosa",
  },
};

let fechaNacimiento = {
  "0": {

      masculino: "del espacio",
      femenino: "del espacio",
  },
  "1": {

      masculino: "de la justicia",
      femenino: "de la justicia",
  },
  "2": {

      masculino: "de Marvel",
      femenino: "de Marvel",
  },
  "3": {

      masculino: "de las tinieblas",
      femenino: "de las tinieblas",
  },
  "4": {

      masculino: "de fuego",
      femenino: "de fuego",
  },
  "5": {

      masculino: "de la noche",
      femenino: "de la noche",
  },
  "6": {

      masculino: "del futuro",
      femenino: "del futuro",
  },
  "7": {

      masculino: "de acero",
      femenino: "de acero",
  },
  "8": {

      masculino: "exterminador",
      femenino: "exterminadora",
  },
  "9": {

      masculino: "de otro planeta",
      femenino: "de otro planeta",
  },
};
/* let fullName = prompt("Dime tu nombre y apellido separado por una ','").trim().toLowerCase().split(',');
let name = fullName[0];
let surname = fullName[1];
let askBirthDay = prompt("En qué año naciste?").trim().toLowerCase();
let birthDay = askBirthDay[askBirthDay.length-1];
let gender = prompt("En qué sexo quieres el nombre? 'masculino' o 'femenino'").trim().toLowerCase();


if (letraNombre[name[0]] && letraApellido[surname[0]] && fechaNacimiento[birthDay]) 
console.log(`Te llamarás: ${letraNombre[name[0]][gender]} ${letraApellido[surname[1]][gender]} ${fechaNacimiento[birthDay][gender]}`);
 */


/* let personas = {
    BridgetteMcGuire: {
      _id: "5d8a48131595639a1e4fa996",
      index: 0,
      guid: "104791eb-a1ea-4700-a1b8-4199244b457c",
      isActive: false,
      balance: "$2,782.80",
      picture: "https://randomuser.me/api/portraits/women/33.jpg",
      age: 23,
      eyeColor: "blue",
      name: "Bridgette McGuire",
      gender: "female",
      company: "KIDGREASE",
      email: "bridgettemcguire@kidgrease.com",
      phone: "+1 (908) 424-2192",
      address: "811 Lawrence Avenue, Saddlebrooke, Ohio, 6224",
      about:
        "Dolor incididunt adipisicing elit cupidatat aliquip ea incididunt deserunt minim nisi laboris aliquip nisi incididunt. In officia laboris proident exercitation est deserunt. Aliquip adipisicing veniam ea voluptate excepteur. Lorem voluptate officia deserunt nulla ex pariatur eu laborum ea. Dolore cillum quis non mollit nostrud fugiat ullamco consectetur officia laboris nostrud excepteur do. Laborum veniam do veniam laboris non est officia nulla eiusmod deserunt.\r\n",
      registered: "2019-06-09T11:31:03 -02:00",
      latitude: -43.764593,
      longitude: 3.900165,
      greeting: "Hello, Bridgette Mcguire! You have 2 unread messages.",
      favoriteFruit: "banana",
    },
    melindawheeler: {
      _id: "5d8a48131108a7cd723412b8",
      index: 1,
      guid: "f55bcd5a-89d8-4ba0-89b5-06df473d8a42",
      isActive: false,
      balance: "$3,624.81",
      picture: "https://randomuser.me/api/portraits/women/3.jpg",
      age: 39,
      eyeColor: "green",
      name: "Melinda Wheeler",
      gender: "female",
      company: "ECLIPTO",
      email: "melindawheeler@eclipto.com",
      phone: "+1 (925) 544-3582",
      address: "726 Luquer Street, Muse, New York, 9303",
      about:
        "Magna veniam aliquip ex labore anim et commodo nostrud. Ut pariatur magna magna deserunt. Pariatur nostrud aliqua ad ad consequat. Nisi laborum nostrud esse fugiat magna et esse duis commodo. Exercitation pariatur exercitation adipisicing excepteur eu ad. Id dolore sint officia culpa do.\r\n",
      registered: "2018-07-13T12:09:36 -02:00",
      latitude: 8.398138,
      longitude: 145.073922,
      greeting: "Hello, Melinda Wheeler! You have 9 unread messages.",
      favoriteFruit: "banana",
    },
    WardFulton: {
      _id: "5d8a48137ab5238008402bb0",
      index: 2,
      guid: "b35f89a9-be2b-46b7-93c4-9849f601aeb3",
      isActive: false,
      balance: "$1,474.79",
      picture: "https://randomuser.me/api/portraits/men/30.jpg",
      age: 31,
      eyeColor: "green",
      name: "Ward Fulton",
      gender: "male",
      company: "QABOOS",
      email: "wardfulton@qaboos.com",
      phone: "+1 (930) 463-3089",
      address: "978 Victor Road, Sims, American Samoa, 9727",
      about:
        "Aliquip nulla minim cupidatat ut anim duis. Irure est consectetur adipisicing ullamco eiusmod anim magna cupidatat cillum cillum anim labore. Magna officia ea ut cillum ad eiusmod adipisicing. Mollit esse ullamco duis Lorem non voluptate est qui excepteur nulla id. Aute pariatur ullamco exercitation deserunt mollit ex in sint. Laborum cupidatat commodo ea est aute nostrud occaecat enim est consectetur enim enim id. Ipsum consectetur tempor aliqua dolor dolor adipisicing id.\r\n",
      registered: "2019-04-27T05:13:09 -02:00",
      latitude: -56.696991,
      longitude: -111.275708,
      greeting: "Hello, Ward Fulton! You have 7 unread messages.",
      favoriteFruit: "apple",
    },
    TessaSellers: {
      _id: "5d8a48134c5447ed216f551a",
      index: 3,
      guid: "94704ad9-d145-485f-883a-4fd4751c9d97",
      isActive: false,
      balance: "$1,320.07",
      picture: "https://randomuser.me/api/portraits/women/77.jpg",
      age: 35,
      eyeColor: "brown",
      name: "Tessa Sellers",
      gender: "female",
      company: "AUSTEX",
      email: "tessasellers@austex.com",
      phone: "+1 (974) 587-3742",
      address: "107 Blake Court, Faxon, Idaho, 8763",
      about:
        "Est ex sunt duis deserunt nisi qui. Cillum veniam dolor do non culpa do eu sunt non. Exercitation dolor ex ad nostrud irure anim ex occaecat laborum. Et non pariatur officia non laboris in labore aute. Duis do ad et sit eu ea laborum adipisicing ex nisi consectetur sunt aute reprehenderit.\r\n",
      registered: "2019-07-29T02:02:08 -02:00",
      latitude: 5.593906,
      longitude: -153.125529,
      greeting: "Hello, Tessa Sellers! You have 6 unread messages.",
      favoriteFruit: "strawberry",
    },
    KimberleyRoberson: {
      _id: "5d8a48130cbcb8b864608a8c",
      index: 4,
      guid: "dc87b874-bafa-44fd-9df2-92ca8f3532ec",
      isActive: true,
      balance: "$3,410.65",
      picture: "https://randomuser.me/api/portraits/women/68.jpg",
      age: 25,
      eyeColor: "green",
      name: "Kimberley Roberson",
      gender: "female",
      company: "EVENTEX",
      email: "kimberleyroberson@eventex.com",
      phone: "+1 (832) 436-2181",
      address: "419 Carlton Avenue, Succasunna, Illinois, 8699",
      about:
        "Irure consequat quis nulla consectetur in magna labore et ad anim duis ad occaecat Lorem. Eiusmod amet exercitation sint non officia do. Cupidatat elit anim mollit id dolor laborum laboris excepteur dolore labore laborum veniam officia.\r\n",
      registered: "2016-05-26T11:07:07 -02:00",
      latitude: -75.82921,
      longitude: 23.130712,
      greeting: "Hello, Kimberley Roberson! You have 2 unread messages.",
      favoriteFruit: "banana",
    },
    EleanorStafford: {
      _id: "5d8a4813b6a71a7be4cf6a4a",
      index: 5,
      guid: "4d540541-746d-4bc2-8718-62d41248015f",
      isActive: false,
      balance: "$3,425.20",
      picture: "https://randomuser.me/api/portraits/women/30.jpg",
      age: 35,
      eyeColor: "blue",
      name: "Eleanor Stafford",
      gender: "female",
      company: "PROTODYNE",
      email: "eleanorstafford@protodyne.com",
      phone: "+1 (978) 407-3988",
      address: "570 Columbus Place, Emory, Guam, 5306",
      about:
        "Consequat velit est ut officia ex Lorem. Aliqua veniam sint in amet nisi magna. Ullamco ad laborum exercitation proident exercitation excepteur nulla reprehenderit sunt fugiat nostrud commodo anim ipsum.\r\n",
      registered: "2019-06-11T07:33:48 -02:00",
      latitude: -78.220494,
      longitude: -140.172634,
      greeting: "Hello, Eleanor Stafford! You have 1 unread messages.",
      favoriteFruit: "strawberry",
    },
    CraneHarris: {
      _id: "5d8a4813adc1e549a3be11dd",
      index: 6,
      guid: "e9f72beb-b67e-4001-9d59-d6d36508bc8f",
      isActive: false,
      balance: "$1,306.69",
      picture: "https://randomuser.me/api/portraits/men/3.jpg",
      age: 39,
      eyeColor: "brown",
      name: "Crane Harris",
      gender: "male",
      company: "JETSILK",
      email: "craneharris@jetsilk.com",
      phone: "+1 (844) 444-2205",
      address: "350 Montieth Street, Titanic, West Virginia, 9450",
      about:
        "Proident voluptate enim quis non nulla aliquip velit proident mollit. Aliqua pariatur id exercitation esse ipsum qui ut eiusmod. Dolor dolor qui do laboris quis est exercitation sit. Eu minim qui commodo qui fugiat occaecat aute. Veniam non do officia sit pariatur tempor sit nulla in magna voluptate mollit ipsum. Dolor et eiusmod aliquip quis deserunt sit officia eu in.\r\n",
      registered: "2018-08-26T03:15:18 -02:00",
      latitude: 86.738392,
      longitude: -72.308621,
      greeting: "Hello, Crane Harris! You have 1 unread messages.",
      favoriteFruit: "strawberry",
    },
  };
  
  let persona = prompt("Dime el nombre de la persona").trim().toLowerCase().split(' ').join('');
  let nombre = "";

  switch(persona) {
    case 'bridgettemcguire':
        nombre = "BridgetteMcGuire";
        break;
    case 'melindawheeler':
        nombre = "melindawheeler"
        break;
    case 'wardfulton':
        nombre = "WardFulton"
        break;
    case 'tessasellers':
        nombre = "TessaSellers"
        break;
    case 'kimberleyroberson':
        nombre = "KimberleyRoberson"
        break;
    case 'eleanorstafford':
        nombre = "EleanorStafford"
        break;
    case 'craneharris':
        nombre = "CraneHarris"
        break;
    default:
        alert("Person not found!!");
  };
  console.log(nombre);

  if(personas[nombre]) {
    console.log(persona.toUpperCase());
    for(let data in personas[nombre]){
        console.log(`${data}: ${personas[nombre][data]}`);
    };
  };
 */