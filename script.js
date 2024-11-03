// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("burger").addEventListener("click", function(){
//     document.querySelector("header").classList.toggle("open");
//     document.querySelector("body").classList.toggle("lock");
//   })
// })

// let animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//   window.addEventListener('scroll',animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;
      
//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight){
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }
//       if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)) {
//         animItem.classList.add('_active');
//       } else {
//         if (!animItem.classList.contains('_anim-no-hide')){
//             animItem.classList.remove('_active');
//         }
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
//   }
//   setTimeout(() => {
//     animOnScroll();
//   },200);
// }

// document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById("burger");
  const header = document.querySelector("header");
  const body = document.querySelector("body");

  burger.addEventListener("click", function() {
    header.classList.toggle("open");
    body.classList.toggle("lock");
  });

  let animItems = document.querySelectorAll('._anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', () => requestAnimationFrame(animOnScroll));

    function animOnScroll() {
      animItems.forEach(animItem => {
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      });
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    // Вызов функции анимации один раз при загрузке страницы
    animOnScroll();
  }

  document.querySelectorAll('.button').forEach(button => {
    button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>';
  });
});
