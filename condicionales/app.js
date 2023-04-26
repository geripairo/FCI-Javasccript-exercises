// EJERCICIOS CONDICIONALES PARTE 1////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO 1
////////////
/* let numInput = prompt("Escribe 2 números separados por ',' y haremos los cálculos").split(',');
let number1 = parseFloat(numInput[0]);
let number2 = parseFloat(numInput [1]);

let calculate = (a, b) => {
    let sum = a + b;
    let substraction = a - b;
    let product = a * b;
    let average = (a + b) / numInput.length;  
    
    console.log(`The sum is ${sum}. The substraction is ${substraction}.
    The product is ${product}. The average is ${average}`);
}

console.log(calculate(number1, number2));

if (number1 > number2) {
    console.log(` The biggest number is ${number1} and the lowest is ${number2}`)
} else if (number1 < number2) {
    console.log(` The biggest number is ${number2} and the lowest is ${number1}`)

} */

// EJERCICIO 2
////////////
/* let age = parseInt(prompt("Dime qué edad tienes:"));

if(age <= 8) alert("Pasa al tobogán");
else alert("Eres demasiado mayor para usar el tobogán."); */

// EJERCICIO 3
////////////
/* let numbers = prompt("Dime tres números separados por ',':").split(',');
let num1 = parseFloat(numbers[0]);
let num2 = parseFloat(numbers[1]);
let num3 = parseFloat(numbers[2]);
let sum = num1 + num2;

while (sum !== num3) numbers = prompt("El tercer número no es la suma de los dos primeros")
alert("El tercer número es la suma de los 2 primeros!!!")
 */
// EJERCICIO 5
//////////////
/* let day = prompt("Dime un día de la semana")
switch (day.toLowerCase()) {
    case 'lunes':
        alert("Hoy es lunes! Qué pereza");
        break;

    case 'martes':
        alert("Los martes no están tan mal");
        break;

    case 'miercoles':
        alert("Este dia no sobra en la semana?");
        break;

    case 'jueves':
        alert("Hoy es jueves. Qué largo se está haciendo...");
        break;
    
    case 'viernes':
        alert("Ya es viernes. El cuerpo lo sabe!!");
        break;

    case 'sabado' || 'domingo':
        alert("Es fin de semana. De chill!");
        break;

    default:
        
        alert(`"${day.toUpperCase()}" no es ningún dia de la semana!! :(`);
  }; */

//   EJERCICIO 6
////////////////
/* let number = parseFloat(prompt("Dime un número y hago el cálculo al cuadrado y al cubo:"))

while(number < 1) {
    number = parseFloat(prompt("Debes escribir un número mayor que 1!"));
}
alert(`${number} al cuadrado es: ${Math.pow(number, 2)} y al cubo es: ${Math.pow(number, 3)}.`);
 */

// EJERCICIO 7
//////////////
/* let numerador = parseFloat(prompt("Dime un numerador"));
let denominador = parseFloat(prompt("Dime un denominador"));

while (denominador === 0) denominador = parseFloat(prompt("El denominador no puede ser 0 !!"));
alert(`El resultado es ${numerador / denominador}`); */

// EJERCICIO 8
//////////////
/* let numbers = prompt("Dime 2 números separados por ',':").split(',');
let num1 = parseFloat(numbers[0]);
let num2 = parseFloat(numbers[1]);

if (num1 > num2)  alert(`${num1} es mayor que ${num2}`);
else if(num1 === num2) alert(`${num1} es igual que ${num2}`);
else alert(`${num1} es menor que ${num2}`); */


// EJERCICIOS CONDICIONALES PARTE 2////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO X
//////////////
/* let temperature = parseFloat(prompt("Dime la temperatura que hace:"));

switch (true) {
    case temperature > 40:
        alert("Si hace más de 40 grados, vete a otro sitio");
        break;

    case (temperature > 30 && temperature < 40):
        alert("enciende el aire acondicionado");
        break;

    case (temperature > 20 && temperature < 30):
        alert("No hagas nada!");
        break;

    case (temperature > 10 && temperature < 20):
        alert("Enciende la calefacción");
        break;
    
    case (temperature < 10):
        alert("Si hace menos de 10 grados. Vete a otro sitio");
        break;
    
    default:
        alert("Escribe un valor numérico válido");
}; */

// EJERCICIO 9
//////////////
/* let numbers = prompt("Dime 2 números separados por ',':").split(',');
let num1 = parseFloat(numbers[0]);
let num2 = parseFloat(numbers[1]);

if(num1 === num2) {
        alert("Los dos números son iguales. Mostrando 0");

    } else if (num1 % 6 === num2 % 6) {
        num1 < num2 ? alert(` Te muestro el menor: ${num1}`) : alert(`Te muestro el menor: ${num2}`);

    } else num1 > num2 ? alert(` Te muestro el mayor: ${num1}`) : alert(`Te muestro el mayor: ${num2}`);
  */

// EJERCICIO 10
///////////////
// Pedimos datos al usuario y lo grabamos en variables

/*         // de tipo string

        let enteroString1 = prompt('Dime un valor entre 25 y 75');

        let enteroString2 = prompt('Dime otro valor entre 25 y 75');




        // Las variables de tipo string las transformamos en numéricas

        let num1 = parseInt(enteroString1);

        let num2 = parseInt(enteroString2);




        // Creo condicional. Para entrar, num1 y num2 tienen que estar en el rango

        // de 25 a 75




        if ((num1 >= 25) && (num1 <= 75) && (num2 >= 25) && (num2 <= 75)) {

            // Cumplo condición, pues voy a grabar todos los números de dentro de

            // num1 y num2 (por ejemplo, 74 y 26, guardaré el 7, 4, 2 y 6)

            let string1 = enteroString1.substring(0, 1); // siguiendo ejemplo, el 7

            let string2 = enteroString1.substring(1); // el 4

            let string3 = enteroString2.substring(0, 1); // el 2

            let string4 = enteroString2.substring(1); // el 6.




            // Vamos a comprobar si hay coincidencias




            if (string1 === string3 || string1 === string4 || string2 === string3 || string2 === string4) {

                alert('Hay dos números iguales');

            } else {

                alert('NO hay dos números iguales')

            }

        } else {

            alert('los números seleccionados no se encuentran en el rango');

        };

*/

const condition20 = function() {



}




const condition21 = function() {
    const age = parseInt(prompt("Necesitamos saber tu edad para alquilar el coche:"));
    const datos = {
        name: '',
        surname: '',
        city: '',
        daysBooking: 0,
        totalCost: 0
    };
    const price = 25;
    const weekCost = 150;

    if(age < 18) return alert("Eres menor de edad. No puedes alquilar un coche todavía");
    else {
        const tieneCarnet = prompt("Tienes el carnet de conducir?").toLowerCase().trim();

        if(!isNaN(parseInt(tieneCarnet))) {
            return alert("Escribe 'si' o 'no'");
        } else {
            if(tieneCarnet === 'si') {
                alert("El coste del coche tiene un coste de 25€ por dia. En caso que lo alquile una semana, el coste será de 150€");
                datos.name = prompt("Nombre");
                datos.surname = prompt("apellido");
                datos.city = prompt("ciudad de recogida");
                datos.daysBooking = parseInt(prompt("dias de alquiler"));

                if(datos.daysBooking === 7) datos.totalCost = `${weekCost}€`;
                else datos.totalCost = `${price * datos.daysBooking}€`;

                
            } else return alert("No puedes alquilar un coche sin carnet");
        };    
    };
    
    let datosValues = Object.keys(datos);
    alert(`
        -${datosValues[0].toUpperCase}: ${datos.name}
        -${datosValues[1].toUpperCase}: ${datos.surname}
        -${datosValues[2].toUpperCase}: ${datos.city}
        -${datosValues[3].toUpperCase}: ${datos.daysBooking}
        -${datosValues[4].toUpperCase}: ${datos.totalCost}
    `);   
    
};

// OPERADORES LÓGICOS Y CONDICIONALES TERNARIOS /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EJERCICIO 2
//////////////

const ejercicio2 = function(){
    let edadMayor = parseInt(prompt("Dime la edad de tu hijo mayor:"));
    let diffAge = parseInt(prompt("Dime los años de diferencia entre el mayor y el menor:"));
    let edadMenor = edadMayor - diffAge;

    if(Number.isNaN(edadMayor || Number.isNaN(diffAge))){
        alert("Debes introducir un valor numérico!!");
    } else edadMenor > 18 ? alert(`El hijo menor tiene ${edadMenor} es mayor de edad`) : alert(`El hijo menor tiene ${edadMenor}. No es mayor de edad`);
}; 

// EJERCICIO 3
//////////////

const ejercicio3 = function(){
    let word = prompt("Dime tu palabra favorita! :D");
    word.includes('r') ?  alert(`Guay! ${word} incluye la letra d!`) :  alert (`${word} no incluye la letra d :(`);
};

// EJERCICIO 4
//////////////

const ejercicio4 = function() {
    let num = parseFloat(prompt("Dime un número:"));
    !Math.abs(num) ? alert(`${num}`) : alert(`${Math.abs(num)}`);
};

// EJERCICIO 5
//////////////
const ejercicio5 = function(){
    let password = prompt("Escribe una contraseña");

    while (password.length < 8) password = prompt("La contraseña tiene que tener un mínimo de 8 caracteres!");
    alert("Contraseña registrada!");
};

// EJERCICIO 6
//////////////

const ejercicio6 = function() {

    let puesto = parseInt(prompt("Dime cómo quedaste en la carrera (en números)"));

    while (isNaN(puesto)) puesto = parseInt(prompt("Debes escribir un valor numérico"));

    const app1 = a => a === 1 ? "Ganaste" : "Lo importante es participar!!";

    const app2 = a => {
        
        let resultado =  
        a === 1 ? "Medalla de oro" : 
        a === 2 ? "Medalla de plata" :
        a === 3 ? "Medalla de bronce!" :
        a > 3 ? "Lo importante es participar" : "Erro: valor no definido"
        return resultado;        
    };

    const app3 = a => a > 0 && a <= 3 ? "Sube al podium" : "Se acabó la carrera"; 

    return console.log(`
    a)${app1(puesto)};
    b)${app2(puesto)};
    c)${app3(puesto)};
    `);    
};


