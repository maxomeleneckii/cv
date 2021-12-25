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


console.log('Самооценка:\nБаллов: 130/130(120/120) \n\n 1. Cтудент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages +10 \n\n 2. Вёрстка валидная + 10 \n - для проверки валидности вёрстки используйте сервис https://validator.w3.org/ \n - валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show". В таком случае баллы за пункт требований выставляем полностью. \n - если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований. \n\n 3. Вёрстка семантическая + 20 \n - В коде странице присутствуют и используются по назначению следующие элементы: \n Под "используются по назначению" имеется в виду, что у элементов есть какое-то содержание, соответствующее типу элемента, а не добавлены пустые теги для получения баллов. Правильность использования элементов не проверяется и на балл не влияет: \n - header, main, footer +5. \n - nav +5. \n - только один заголовок h1 +5. \n - заголовки h2 +5. \n\n 4. В footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10 \n Если ссылка в футере ведёт на курс stage0, это не ошибка. \n\n 5. Для оформления СV используются css - стили + 10. \n\n 6. При уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10. \n\n 7. На странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10. \n\n 8. Навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10 \n Также допускается использование нумерованого списка ol > li или ol > li > a. \n\n 9. Содержание CV +30. \n - краткую информацию о себе +5. \n - контакты для связи +5. \n - перечень навыков +5. \n - пример кода. Код добавляется при помощи символов и тегов, а не картинкой +5. \n - перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения +5. \n - информацию об образовании и уровне английского +5. \n\n 10. CV выполнено на английском языке +10.');