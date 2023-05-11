import { ARTICULOS } from "./objects.js";

let addButton = document.querySelector('.buyItem');
let sumButton = document.querySelector('#add');
let removeButton = document.querySelector('#remove');
let contador = 0;

/* let createItem = function(){
    let newItem = document.createElement('tr');
    newItem.innerHTML = 
} */

sumButton.addEventListener('click', () => {    
    contador += 1;
    document.querySelector('#noIvaPrice span').innerText = contador;
    document.querySelector('#ivaPrice span').innerText = contador + (contador * 0.21);        
});

removeButton.addEventListener('click', () => {
    if(contador > 0){
        contador -= 1;
        document.querySelector('#noIvaPrice span').innerText = contador;
        document.querySelector('#ivaPrice span').innerText = contador + (contador * 0.21);
    }    
});

addButton.addEventListener('click', () => {
    document.createElement('')
})
// console.log(ARTICULOS.llave.precio);
