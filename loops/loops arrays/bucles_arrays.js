// 1//////////////////
/* 
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(let i = 11; i<=20; i++){
    let popedNumbers = numeros.pop(numeros[i])
    numeros.unshift(popedNumbers);   
};

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}  */

// 2///////////////////////
/* let array = [];
for(let i = 1; i <= 10; i++){
    array.push(parseFloat(prompt("Escribe un número")));
};
console.log(array); */

// 5////////////////////////
/* let numsArray = [];
for(let i = 1; i <= 3; i++){
    numsArray.push(parseFloat(prompt("Escribe un número")));
};

let min = numsArray[0];

let pequeño = numsArray.forEach( numero => {
    if(numero < min) min = numero;
});
console.log(`El número más peuqueño es ${min}`); */

/* let pequeño = numsArray.reduce(function(menor, numero) {
    if(menor > numero) {
       menor = numero;
    }
    return menor;
}, numsArray[0]);

console.log(`El número más peuqueño es ${pequeño}`); */

// 6 ////////////////////////////////
// let numeros = [6, 8, 5, 10, 9, 8, 7, 8, 6, 5];
/*  let sum = numeros.reduce(function(a, b) {
    return a + b 
 }, 0);
 let average = sum / numeros.length;
 console.log(`La media del array es ${average}`); */
/* let count = 0;
numeros.forEach( numero => count += numero);
let average = count / numeros.length;
console.log(`La media del array es ${average}`); */

// 7 ///////////////////////////////////
/* let edades = [];
let min = 18;
let max = 35;

for (let i = 0; i < 20; i++){
    edades.push(Math.floor(Math.random() * (max - min + 1)) + min);        
};
console.log(edades);

let sum = edades.reduce((a, b) => a + b, edades[0]); 

let average = sum / edades.length;
console.log(`La media de las edades es ${average}`); */

// 8 ///////////////////////
/* let values = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let userNum 
do{
    userNum = parseInt(prompt("Dime un número entre 0 y 9"));
    values[userNum] *= 2;
    console.log(values);
}  while(userNum >= 0 && userNum < 10)
alert("Número no válido!"); */






