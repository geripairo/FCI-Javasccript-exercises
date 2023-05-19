// LLAMAMOS API
fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(randomUsers => {
    for (let user of randomUsers.results){
        console.log(user)
        document.querySelector('#random-users').innerHTML = `        
        <img class="picture" src="${user.picture.large}" alt="user-picture">
        <p class="address"></p>
        <h2 class="name">${user.name.first} ${user.name.last}<h2/>
        <p class="address-span">My address is:</p>
        <p class="address">${user.location.street.name} / ${user.location.city} / ${user.location.country}</p>
        <p class="phone"><span>Phone: <span/>${user.cell}</p>
        `
        document.querySelector('img').style.borderRadius = '100px'
    }
})
