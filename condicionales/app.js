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