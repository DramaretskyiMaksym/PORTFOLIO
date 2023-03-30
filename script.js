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


// let anchors = document.querySelectorAll('.banner a[href*="#"]');

// for (anchor of anchors) {
//   if (anchor){
//     anchor.addEventListener('click', function(e){
//       e.preventDefault();
//       anchorId = this.getAttribute('href');
//       document.querySelector(anchorId).scrollIntoView({
//         behavior: 'smooth', block:'start'
//       })
//     })
//   }
// }




document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll(".smooth-scroll")
  
  for(let i = 0; i<links.length; i++){
    links[i].addEventListener("click", function(event){
      event.preventDefault();

      const blockID = event.target.getAttribute("href").substr(1);
      
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

})




// function scrollTo(element){
//   window.scroll({
//     left:0,
//     top: element.offsetTop,
//     behavior: 'smooth'
//   })
// }

// var scroll = document.querySelector('scroll');
// var footer = document.querySelector('footer');

// scroll.addEventListener('click, () => {
//   scrollTo(footer);
// })


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