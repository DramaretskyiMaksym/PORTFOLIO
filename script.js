// var myHeading = document.querySelector('.header__link');
// myHeading.textContent = 'Hello world!';

// alert('Hello')

// let userName = prompt('What is your name?');
// let userOld = prompt('How old are you?');
// let userFrom = prompt('Where are you from');

// let userAll = 'Hello!' + ' ' + userName + '! ' + 'You are' + ' ' +  userOld + ' ' + 'years old!' + ' '  + 'You live in' + ' ' + userFrom ;
// alert(userAll)
let headerBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let close =document.querySelector('.banner');
let closePortfolio = document.querySelector('.title__portfolio');


headerBurger.addEventListener('click', function(){
  headerBurger.classList.toggle('active');
  menu.classList.toggle('active');
  close.classList.toggle('close')
  closePortfolio.classList.toggle('close')
});



// var myImage = document.querySelector('.img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox2.png');
//     } else {
//       myImage.setAttribute ('src','images/firefox-icon.png');
//     }
// }
// const para = document.querySelector('.q');

// para.addEventListener('click', updateName);

// function updateName() {
//   let name = prompt('Enter a new name');
//   para.textContent = 'Player 1: ' + name;
// }


document.addEventListener("DOMContentLoaded", function() {
  function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
});

