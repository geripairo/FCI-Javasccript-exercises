// DICCIONARIO DE PRODUCTOS
/* import { ARTICULOS } from "./objects.js";
const {hacha, martillo, sierra, tronco} = ARTICULOS; */


// SELECCION PADRE DE TABLA TBODY
let productParent = document.querySelector('tbody');

function addProduct(e){
    let target = e.currentTarget.parentNode
    let newProduct = document.createElement('tr') ;
    newProduct.setAttribute('class', 'product');
    newProduct.innerHTML =  
    `
    <td class="product_name"><span class="product_icon"><img class="shopIcon" src=${target.children[0].src}></span>${target.children[1].innerText}</td>
    <td class="product_price">${target.children[2].innerText}<span><img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/10/Gold.png/18px-Gold.png"
    alt="oro-icono"></span></td>
    <td><input class="quantity" id="qty" type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td><span class="product_subtotal">0</span><span><img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/10/Gold.png/18px-Gold.png"
    alt="oro-icono"></span></td>
    <td><button class="btn_remove">X</button></td>
    `
    productParent.appendChild(newProduct); 
    let newRemoveBtn = newProduct.querySelector('.btn_remove');
    newRemoveBtn.addEventListener('click', removeProduct);

    /* displayModify(e, target.children[4], target.children[5]); */
};

function removeProduct(e){
    const target = e.currentTarget.parentNode.parentNode;
    const parent = target.parentNode;
    parent.removeChild(target);
}

/* function displayModify(e, sumBtn, minusBtn){

    let button = e.currentTarget
    button.classList.add('add-inactive')
    sumBtn.classList.add('btn-modify-active')
    minusBtn.classList.add('btn-modify-active')

} */

function updateSubtotal(product) {
    const price = product.querySelector('.product_price');
    const quantity = product.querySelector('.quantity');
    const result = parseFloat(price.innerText) * quantity.value;
    const subtotal = product.querySelector('.product_subtotal');
    return subtotal.innerText = result;  
}

function calculateAll() {  
  
    const products = document.getElementsByClassName('product');
    let totalValue = 0;
    [...products].forEach(product => {
    
      totalValue += parseFloat(updateSubtotal(product)); 
  
    });   
  
    const totalPrice = document.querySelector('.subtotal_price');
    totalPrice.innerText = totalValue;

    const iva = document.querySelector('.total_iva')
    iva.innerText = totalValue * 0.21;
    

    const total = document.querySelector('.total_price')
    total.innerText = parseFloat(totalPrice.innerText) + parseFloat(iva.innerText);  
}

// EJECUCIÓN FUNCIONES ADDEVENTLISTENER
window.addEventListener('load', () => {    
    const addButtons = document.querySelectorAll('.btn-add');
    addButtons.forEach(btn => {
    btn.addEventListener('click', addProduct);
    });

    const calculatePricesBtn = document.getElementById('update_total');
    calculatePricesBtn.addEventListener('click', calculateAll);

   
});








