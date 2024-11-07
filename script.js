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








document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");

  // Функция для начала воспроизведения видео с начала
  function startVideo() {
      video.currentTime = 0; // Перематываем видео на начало
      video.play();
  }

  // Функция для остановки видео
  function stopVideo() {
      video.pause();
  }

  // Создаем новый IntersectionObserver
  var observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Когда видео появляется в области видимости, запускаем его с начала
              startVideo();
          } else {
              // Когда видео выходит из зоны видимости, останавливаем его
              stopVideo();
          }
      });
  }, {
      threshold: 0.5 // Видео начинает воспроизводиться, когда более 50% его площади находится в видимости
  });

  // Начинаем отслеживать видео
  observer.observe(video);

  // Обработчик события, чтобы перезапустить видео после полного воспроизведения
  video.addEventListener("ended", function () {
      startVideo(); // Перезапускаем видео
  });
});











//////////////////////////////


  // Получаем текущий URL
  const currentPath = window.location.pathname;

  // Получаем все ссылки в меню
  document.querySelectorAll('.menu__link').forEach(link => {
    // Если href ссылки совпадает с текущим путем, добавляем класс 'active'
    if (link.getAttribute('href') === '.' + currentPath) {
      link.classList.add('active');
    }
  });

  //-------------------------------------------------------------------------------------------------

      // При загрузке страницы добавляем класс "visible" к body для плавного появления
      document.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add("visible");
      });
    
      // Находим все ссылки в навигации
      document.querySelectorAll('a.menu__link').forEach(link => {
        link.addEventListener("click", function(event) {
          // Отключаем стандартное поведение ссылки
          event.preventDefault();
          
          // Убираем класс "visible", чтобы запустить анимацию исчезновения
          document.body.classList.remove("visible");
    
          // Переходим на новую страницу после завершения анимации (600 мс)
          setTimeout(() => {
            window.location.href = this.href;
          }, 10); // задержка должна совпадать со временем анимации
        });
      });

///-----------------------------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
//   const lazyLoadFont = new FontFace('Montserrat', 'url(../fonts/Montserrat-Bold.woff2)');
//   lazyLoadFont.load().then(function (loaded_face) {
//     document.fonts.add(loaded_face);
//   });
// });







































