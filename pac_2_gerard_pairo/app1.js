// PARTE 1 (FUNDAMENTOS)

// EJERCICIO 1
/* let isAdult = prompt("Eres mayor de edad?").trim().toLowerCase();

if(isAdult === "no") alert("encantado, pero adiós.");

if(isAdult === "si") isAdult = prompt("Tienes carnet de conducir?").trim().toLowerCase();
else alert("Error. Debes responder si o no");

if(isAdult === "no")alert("Te animo a que te lo saques!");

if(isAdult === "si") alert("Felicidades! Vendo coches muy bonitos!");
else alert("Error. Debes responder si o no"); */

// EJERCICIO 2
/* let continent = prompt("A qué continente te gustaría viajar?").trim().toLowerCase().replace(/\s+/g, '');
let title = document.querySelector('h1');
let images = document.querySelector('#images');

let createCapital = function(capital, route, ) {
    title.innerText = `La capital más poblada de ${continent} es ${capital.toUpperCase()}!`;
    images.innerHTML = '<img src="" alt=""></img>'
    document.querySelector('#images img').src=route;
    document.querySelector('p').innerText = text;
}


switch(continent) {
    case "europa":
        createCapital("Estambul", "https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg?impolicy=fcrop&w=800&h=533&q=medium");
        break;
    
    case "africa":
        createCapital("El Cairo", "https://www.egiptoexclusivo.com/wp-content/uploads/2020/12/vista-aera-del-cairo.jpg");
        break;

    case "americadelnorte":
        createCapital("Nueva York", "https://www.civitatis.com/blog/wp-content/uploads/2016/05/Estatua-de-la-Libertad.jpg");
        break;

    case "americadelsur":
        createCapital("Sao Paulo", "https://elviajista.com/wp-content/uploads/2019/02/hacersaopaulo.jpg");
        break;

    case "asia":
        createCapital("Shangai", "https://content.r9cdn.net/rimg/dimg/7e/34/4e0ebeaf-city-25894-1672d2a1216.jpg?crop=true&width=1020&height=498");
        break;

    case "oceania":
        createCapital("Wellington", "https://www.youtooproject.com/wp-content/uploads/2018/08/image1-1.png");
        break;

    case "antartida":
        createCapital("Ushuaia", "https://tourscanner.com/blog/wp-content/uploads/2022/10/best-things-to-do-in-Ushuaia.jpg");
        break;

        default: alert("This is not a continent!!")
};
 */



// PARTE 2 //////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// OBJETO CIUDADES
/* const cities = {
    barcelona: {
        tren: 150,
        autobus: 67,
        coche: 54
    },
    madrid: {
        tren: 210,
        autobus: 85,
        coche: 62
    },
    bilbao: {
        tren: 120,
        autobus: 70,
        coche: 81
    }
};

// OBJETO ENLACES IMAGENES DE LA CIUDAD
let images = document.querySelectorAll('.cityImg');
const imgList = {
    barcelona: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/45/49/province-of-barcelona.jpg?w=700&h=500&s=1", "https://interrailero.com/wp-content/uploads/2022/01/que-ver-en-barcelona-mapa.jpg", "https://static-resources.mirai.com/wp-content/uploads/sites/1745/20221020101118/turismo-en-Barcelona-1024x678.jpg", "https://www.barcelonaturisme.com/wv3/es/"],
    madrid: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/6a/f5/4c/caption.jpg?w=500&h=300&s=1", "https://content.tui.co.uk/adamtui/2021_11/29_11/56f2a8e5-e8f8-4d6f-9ea3-adef00be1b75/LOC_000345_shutterstock_627584264WebOriginalCompressed.jpg?i10c=img.resize(width:1080);img.crop(width:1080%2Cheight:608)", "https://www.thetrainline.com/cms/media/1385/spain-madrid-plaza-mayor.jpg?mode=crop&width=660&height=440&quality=70", "https://www.esmadrid.com/" ],
    bilbao:["https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/09/que-ver-en-bilbao.jpg", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/panoramica-bilbao-guggenheim-1634221518.png", "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/260000/260137-Bilbao.jpg", "https://www.bilbaoturismo.net/BilbaoTurismo/es/turistas"]
}; 

// OBJETO ENLACES IMAGES TRANSPORTE
const transportImg = {
    tren: "https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2016/10/1140-ss-10-fall-train-trips-essex-steam-connecticut-esp.imgcache.rev11e0c397c4203819c894b6dc65aa546c.web.900.513.jpg",

    autobus: "https://estaticos-cdn.elperiodico.com/clip/60809ca6-325f-4c31-adcb-ba055fd74bb9_alta-libre-aspect-ratio_default_0.jpg",

    coche: "https://www.cocheglobal.com/uploads/s1/18/92/14/69/nuevo-huawi-aito-5.jpeg"
};

// FUNCIONES PARA EL DOM
let imageCreator = function(city){
    for (let i = 0; i < images.length; i++){
        images[i].src = imgList[city][i];
    }
};
let showCity = function(city, transport){
    document.querySelector('h1').innerText = `Has escogido ${city.toUpperCase()}!`
    imageCreator(city);
    document.querySelector('a').href = imgList[city[3]]
    document.querySelector('h2').innerText = `El precio del viaje en ${transport} es de ${cities[city][transport]} euros.`;
    document.querySelector('#transportImg').src = transportImg[transport];
};



// PROMPT
let whichCity = prompt("A qué ciudad prefieres ir? A Barcelona, Madrid o Bilbao").trim().toLowerCase().replace(/\s+/g, '');
let whichTransport = prompt("Con qué transporte quieres ir? tren, autobús o coche?").trim().toLowerCase().replace(/\s+/g, '');

if(whichCity && whichTransport) {
    showCity(whichCity, whichTransport);
}; */



// PARTE 3 /////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
let personas = {
    bridgettemcguire: {
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
    wardfulton: {
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
    tessasellers: {
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
    kimberleyroberson: {
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
    eleanorstafford: {
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
    craneharris: {
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
let nombre = ""


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

  if(personas[nombre]) {    
        document.querySelector('h2').innerText = `Nombre: ${personas[nombre].name}`;
        document.querySelector('#age').innerText = `Edad: ${personas[nombre].age.toString()}`;
        document.querySelector('img').src = personas[nombre].picture;
        document.querySelector('#eyeColor').innerText = `Color de ojos: ${personas[nombre].eyeColor}`;
        document.querySelector('body').style.backgroundColor = personas[nombre].eyeColor;
        document.querySelector('#phone').innerText = `Teléfono: ${personas[nombre].phone}`;
        document.querySelector('#bio').innerText = `Bio: ${personas[nombre].about}`
  };