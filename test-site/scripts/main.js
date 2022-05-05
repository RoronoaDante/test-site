/*

const myHeading = document.querySelector('h1');
myHeading.textContent = 'JS Online!';

const myHeading2 = document.querySelector('h1'); 
myHeading.textContent = 'X2';

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}

document.querySelector('html').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  });

  */

 let myImage = document.querySelector('img');

 myImage.onclick = function() {
     let mySrc = myImage.getAttribute('src');
     if(mySrc === 'images/Annie.jpg') {
       myImage.setAttribute('src','images/Renate.jpg');
     } else {
       myImage.setAttribute('src','images/Annie.jpg');
     }
 }

 let myButton = document.querySelector('button');
 let myHeading = document.querySelector('h1');

 function setUserName() {
  let myName = prompt('Please enter your name.');
  if (myName === null || myName === ''){
    myName = 'Person'
  }
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome back, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}