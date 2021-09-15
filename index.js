const button = document.querySelector('.burger-menu');
const burgerNav = document.querySelector('.burger-nav');
const body = document.querySelector('body');
const navItems = document.querySelectorAll('.burger-nav__list > li > a');
const linkItem = document.querySelectorAll('.burger-nav__list > li > a[href^="#"');
const topOffset = document.querySelector('.header').offsetHeight;

if (button) {
  button.addEventListener('click', function (e) {
    button.classList.toggle('active');
    burgerNav.classList.toggle('active');
    body.classList.toggle('block');
  });
}

navItems.forEach(i => {
  i.addEventListener('click', function (e) {
    button.classList.remove('active');
    burgerNav.classList.remove('active');
    body.classList.remove('block');
  });
});

linkItem.forEach(l => {
  l.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});


console.log('Самооценка: \n\n 1. Вёрстка валидная + 10 \n - для проверки валидности вёрстки HTML использован сервис https: (//validator.w3.org/), высвечивается надпись (Document checking completed. No errors or warnings to show). \n - для проверки валидности вёрстки CSS использован сервис https: (//jigsaw.w3.org/css-validator/), высвечивается надпись (Поздравляем! Ошибок не обнаружено). \n\n 2. Вёрстка семантическая + 20 \n - в коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1 - h6. \n - заголовок h1 может быть только один 2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1 - h6, но не больше 20 баллов. \n\n 3. Для оформления СV используются css - стили + 10 \n - 1 балл за каждый стилизованный элемент, но не больше 10 баллов. \n\n 4. Контент размещается в блоке, который горизонтально центрируется на странице + 10 \n - фоновый цвет, если он есть, тянется во всю ширину страницы. \n\n 5. Вёрстка адаптивная + 10 \n - ни на одном из разрешений экрана до 320 px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется. \n\n 6. Есть адаптивное бургер-меню + 10 \n - ссылки в пунктах меню ведут на основные разделы CV \n - при кликах по пунктам меню реализована плавная прокрутка по якорям \n - при уменьшении ширины экрана меню становится адаптивным. \n\n 7. На странице СV присутствует изображение + 10 \n - фото или аватарка автора CV \n - пропорции изображения не искажены \n - у изображения есть атрибут alt(может быть пустым). \n\n 8. Контакты для связи и перечень навыков оформлены в виде списка ul > li + 10. \n\n 9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского + 10. \n\n 10. CV содержит пример вашего кода(например, решение задачи с сайта codewars) с подсветкой кода + 10. \n\n 11. CV содержит изображения-ссылки на выполненные вами проекты + 10 \n - при клике по изображению страница проекта открывается в новой вкладке \n - у каждого проекта есть название, небольшое описание, указан перечень используемых технологий. \n\n 12. CV выполнено на английском языке + 10 \n\n 13. Выполнены требования к Pull Request + 10 \n - есть ссылка на задание \n - скриншот страницы СV \n - ссылка на деплой страницы CV на GitHub Pages \n - выполнена самооценка(самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт). \n\n 14. Есть видеорезюме автора CV на английском языке + 10 \n - видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки \n - продолжительность видео 3 - 5 минут(±15 секунд) \n - в описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке(например, в документе Google Docs).\n\n 15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию(это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) + 10. \n\n Итого: 160 баллов.');