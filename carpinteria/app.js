// DICCIONARIO DE PRODUCTOS
import { ARTICULOS } from "./objects.js";
const {hacha, martillo, sierra, tronco} = ARTICULOS;

// ARRAY PRODUCTOS (PARA IMPRIMIRLOS)
let products = [];

// SELECCIONAMOS BOTONES DE COMPRAR
let addMartillo = document.querySelector('.add_martillo');
let addHacha = document.querySelector('.add_hacha');
let addSierra = document.querySelector('.add_sierra');
let addTronco = document.querySelector('.add_tronco');
let addButton = document.querySelectorAll('.btn-add')
/* let parentMartillo = document.querySelector('.add_martillo').parentNode
console.log(parentMartillo); */

// SELECCION PADRE DE TABLA TBODY
let productParent = document.querySelector('tbody');



const createItem = function (product, modifyProductCLass, porductPush) {
    product.classList.add('add-inactive')
    const modifyBtns = document.querySelectorAll(modifyProductCLass);
    for (let btn of modifyBtns) {
        btn.classList.add('btn-modify-active')
    };
    products.push(porductPush);
    // createRow(porductPush);
};

const createRow = function(item){    
/*         let newProduct = document.createElement('tr') ;
        newProduct.setAttribute('class', 'product');
        newProduct.innerHTML =  
        `
        <td class="product_name">${item.nombre}<span class="product_icon"></span></td>
        <td class="product_price">${item.precio}<span><img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/10/Gold.png/18px-Gold.png"
        alt="oro-icono"></span></td>
        <td><input class="product_qty" type="number" id="qty"></td>
        <td><span class="product_subtotal"></span><span><img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/10/Gold.png/18px-Gold.png"
        alt="oro-icono"></span><span><button class="btn_remove">X</button></span></td>
        `
        productParent.appendChild(newProduct);  */  
};

function addProduct(e){
    let target = e.currentTarget.parentNode
    console.log(target.children[2].innerText);
    

}

addMartillo.addEventListener('click', addProduct);


// EVENTO CLICK PARA BOTONES COMPRAR
/* addMartillo.addEventListener('click', function(){
    createItem(addMartillo, '.modify-martillo', martillo);
});

addHacha.addEventListener('click', function(){
    createItem(addHacha, '.modify-hacha', hacha);
});
addSierra.addEventListener('click', function(){
    createItem(addSierra, '.modify-sierra', sierra);
});
addTronco.addEventListener('click', function(){
    createItem(addTronco, '.modify-tronco', tronco);
}); */


let cantidad = 0;
let precio = 0;





/* sumButton.addEventListener('click', () => {    
    contador += 1;
    document.querySelector('.precio_total span').innerText = contador;
    document.querySelector('#ivaPrice span').innerText = contador + (contador * 0.21);        
});

removeButton.addEventListener('click', () => {
    if(contador > 0){
        contador -= 1;
        document.querySelector('#noIvaPrice span').innerText = contador;
        document.querySelector('#ivaPrice span').innerText = contador + (contador * 0.21);
    }    
}); */
// console.log(hacha);

/* let createItem = function(){
    let newItem = document.createElement('tr');
    newItem.innerHTML = 
} */