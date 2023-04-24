// EJERCICIOS CONDICIONALES PARTE 1

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
let number = parseFloat(prompt("Dime un número y hago el cálculo al cuadrado y al cubo:"))

while(number < 1) {
    number = parseFloat(prompt("Debes escribir un número mayor que 1!"));
}
alert(`${number} al cuadrado es: ${Math.pow(number, 2)} y al cubo es: ${Math.pow(number, 3)}.`);
