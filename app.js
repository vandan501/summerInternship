let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Bhaaji Paav',
        image: 'pav-bhaji.jpg',
        price: 150 // Price in INR
    },
    {
        id: 2,
        name: 'Pauva',
        image: 'pauva.jpg',
        price: 200 // Price in INR
    },
    {
        id: 3,
        name: 'Gujarati Thaali',
        image: 'gujaratifixedthali.jpg',
        price: 250 // Price in INR
    },
    {
        id: 4,
        name: 'Dhokala',
        image: 'dhokala.jpg',
        price: 120 // Price in INR
    },
    {
        id: 5,
        name: 'Kadhi Khichadi',
        image: 'kadhi-khadi.jpg',
        price: 180 // Price in INR
    },
    {
        id: 6,
        name: 'Khandvi',
        image: 'khandvi.jpg',
        price: 160 // Price in INR
    },
    {
        id: 7,
        name: 'Punjabi Thaali',
        image: 'thali-punjabi-fixed.jpg',
        price: 280 // Price in INR
    },
    {
        id: 8,
        name: 'Fafda Jalebi',
        image: 'jalebifafda.jpg',
        price: 300 // Price in INR
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
