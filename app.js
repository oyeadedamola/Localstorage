// localStorage.setItem('Animal1', 'Cat' );
// localStorage.setItem('Animal3', 'Donkey' );
// localStorage.setItem('Animal4', 'Monkey' );
// localStorage.setItem('Animal5', 'Tortoise');

// let Animal1 = localStorage.getItem('Animal1')
// let Animal3 = localStorage.getItem('Animal3')
// let Animal4 = localStorage.getItem('Animal4')
// let Animal5 = localStorage.getItem('Animal5')

// const person1 = {
//  name: 'Hafeez',
//  location: 'Lagos'
// }

// const person2 = {
//  name: 'Dolapo',
//  location: 'Ogba'
// }

// const person3 = {
//  name:'Dunsin',
//  location: 'Abeokuta'
// }

// localStorage.setItem('user1',JSON.stringify(person1));
// localStorage.setItem('user2',JSON.stringify(person2));
// localStorage.setItem('user3',JSON.stringify(person3));

const inpKey = document.querySelector('#inpKey');
const inpValue = document.querySelector('#inpValue');
let btnInsert = document.querySelector('#btnInsert');
let isOutput = document.querySelector('#isOutput');

btnInsert.addEventListener('click',e =>{
let key = inpKey.value;
let value = inpValue.value;
// console.log(key);
// console.log(value);
// const li = document.createElement('p')
// li.appendChild(document)
// isOutput.innerHTML += `<p>${key}: ${value}<p>`;
if (key && value){
 localStorage.setItem(key, value);
 location.reload
}
})
 
for (let index = 0; index < localStorage.length; index++) {
 const element = localStorage.key(index);
 const elementTwo = localStorage.getItem(element);

 isOutput.innerHTML += `<p>${element}: ${elementTwo}</p>`;
 
}
