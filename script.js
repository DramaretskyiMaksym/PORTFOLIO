
// alert ('Hello');

// let ToNumber = prompt('enter a number');
// let ToNumberS = prompt ('enter the second');

// let stringToNumber = Number(ToNumber);
// let stringToNumberS = Number(ToNumberS);

// let sum = (stringToNumber + stringToNumberS);
// let diff = (stringToNumber - stringToNumberS);
// let mult = (stringToNumber * stringToNumberS);
// let div = (stringToNumber / stringToNumberS);
// // console.log (sum,diff,mult,div);

// alert ('Calculations are finished!\n'
// + stringToNumber + ' ' + '+' + ' ' + stringToNumberS + ' ' + '=' + ' ' + sum + '\n'
// + stringToNumber + ' ' + '-' + ' ' + stringToNumberS + ' ' + '=' + ' ' + diff + '\n'
// + stringToNumber + ' ' + '*' + ' ' + stringToNumberS + ' ' + '=' + ' ' + mult + '\n'
// + stringToNumber + ' ' + '/' + ' ' + stringToNumberS + ' ' + '=' + ' ' + div);

// for (let char of "Hello 0 0 0 ") {
//   alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
// }



// alert ('Hello My Friend');

// let one = prompt("enter the first number");
// let two = prompt("enter the second number");

// let toOneNumber = Number (one);
// let toTwoNumber = Number (two);

// let sum = toOneNumber + toTwoNumber;
// let diff = toOneNumber - toTwoNumber;
// let mult = toOneNumber * toTwoNumber;
// let div = toOneNumber / toTwoNumber ;

// let allValues = ("Calculations are finished!" + "\n" 
// + toOneNumber + " " + "+" + " " + toTwoNumber + " " + "=" + " " + sum + "\n"
// + toOneNumber + " " + "-" + " " + toTwoNumber + " " + "=" + " " + diff + "\n"
// + toOneNumber + " " + "*" + " " + toTwoNumber + " " + "=" + " " + mult + "\n"
// + toOneNumber + " " + "/" + " " + toTwoNumber + " " + "=" + " " + div + "\n");
// alert (allValues);














// let name = prompt('What is your name?');
// let userOld = prompt('How old are you?');
// let all = 2023 - userOld;
// alert ("ты года рождения " + all);


// let number = Boolean (1);
// let srt = 'sove\n ka\'loe'
// console.log (srt);

// let userAll = 'Hello!' + ' ' + userName + '! ' + 'You are' + ' ' +  userOld + ' ' + 'years old!' + ' '  + 'You live in' + ' ' + userFrom ;
// alert(userAll)
// let templateString = `Hello! ${userName}, ${userOld} ${userFrom}`;
// console.log(templateString);













document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open");
    document.querySelector("body").classList.toggle("lock");
  })
})

let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll',animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')){
            animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }

  setTimeout(() => {
    animOnScroll();
  },200);
}



// let headerBurger = document.querySelector('.header__burger');
// let menu = document.querySelector('.header__menu');
// let close =document.querySelector('.banner');
// let closePortfolio = document.querySelector('.title__portfolio');


// headerBurger.addEventListener('click', function(){
//   headerBurger.classList.toggle('active');
//   menu.classList.toggle('active');
//   close.classList.toggle('close')
//   closePortfolio.classList.toggle('close')
// });

// let person = {
//   name:'Maksym',
//   surname: 'Dramaretsyi',
//   age: 24,
//   'hello word':'HELLO WORD'
// };

// person.name = 'Karina';
// person.age = person.age + 1;

// console.log(person);

// let newPerson = person;

// newPerson.name = 'Maksym';
// person.age = person.age - 1;

// console.log ('1й варинат', person);
// console.log ('2й вариант',newPerson);




// let array = [ 1,2,3,4,5, undefined,null,{ a:110}, ['a', 'b', 'c']];
// console.log(array);
// console.log(array[7]);
// console.log(array[0]);
// console.log(array[array.length -1]);

// array[5] = 'New value';


// let obj = array[array.length -2];
// console.log('obj',obj)
// obj.a = 'New VALUE';

// array[array.length -1 ] [1] = 'CC';
// console.log(array);

// const a = 10, b = 122;
// if (a > b) {
//   console.log(' a lees than b');
// }
// else {
//   console.log('a greater than b');
// }

// const a = 5, b = 0, c = -1;

// if (a > 0 || b > 0 || c > 0) {
//     console.log('one number is positive')
// }

// const a = 10;

// if (a > 0) {
//     console.log ('a > 0');
// }  else if ( a < 0){
//     console.log(a < 0);
// } else {
//     console.log('a = 0;');
// }

// let one = prompt("введите число");
// let two = prompt("введите второе число");
// let dat = prompt ('выберите математическою операцию:'+'\n + , - , * , / , pow ');

// let a = Number(one);
// let b = Number(two);


// let person = {
//   sum: a + b,
//   diff: a - b,
//   mult: a * b,
//   div: a / b,
//   pow: Math.pow(a,b),
// };



// if (dat == '+'){
//   console.log(person.sum);
// } else if (dat == '-') {
//     console.log(person.diff);
// } else if (dat == 'pow'){
//   console.log(person.pow);
// } else if (dat == '*') {
//     console.log(person.mult);
// } else if (dat == '/') {
//   console.log(person.div);
// }


// let v = prompt ('Хотите ли определит cоs, sin или pow? yes or no ?');
// if (v == 'yes'&&'y'){
//   let numb = prompt ('Укажите число');
//   let varible = prompt('выберите операцию:'+'\n cos, sin,');
//   if (varible == 'cos'){
//     console.log(Math.cos(numb));
//   } else if (varible == 'sin') {
//     console.log(Math.sin(numb));
//   }
// } else{
//     console.log('чтож, тогда пока');
// };
// let on = {
//   cos: Math.cos(numb),
//   sin: Math.sin(numb),
// };
