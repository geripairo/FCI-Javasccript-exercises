// LLAMAMOS API
let key="tXeD1BMtl63mgzvYSgX4KYGNoqoMfGunYfUQeJKh"
let año = prompt('Dime un año:');
let mes = prompt('Dime un mes');
let dia = prompt('Dime un dia');
fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${año}-${mes}-${dia}&api_key=${key}`)
.then(response => response.json())
.then(roverMars => {
    document.querySelector('body').style.background = `url(${roverMars.photos[0].img_src.replace(/['"]+/g, '')}) no-repeat 
    fixed center center /cover`
    for(let item of roverMars.photos){
        document.querySelector('.info').innerHTML += `<img src=${item.img_src} alt=""></img>`
    }
});






