"use strict";
// это для того чтобы "при загрузке страницы" сработала функция windowLoad
window.addEventListener("load", windowLoad);
// для меню бургер
const html = document.documentElement;

//  Женя настоятельно рекомендует испольщовать код внутри функции "при загрузке страницы"
function windowLoad() {
  document.addEventListener("click", documentActions);
  html.classList.add("loaded");
}
function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".icon-menu")) {
    html.classList.toggle("menu-open");
  }

  // этот тернаный оператор проверят, если пользоватьель кликнул на элемент с классом "menu__link" (в данном случае просто кнопка или линк в меню) и если у html есть класс "menu-open" (открыт меню бургер), то удаляет его (в даннам случае закрывает меню бургер), иначе ничего не делает
  // ЭТО СДЕЛАНО ЧЕРЕЗ ТЕРНАРНЫЙ ОПЕРАТОР

  targetElement.closest(".menu__link") && html.classList.contains("menu-open")
    ? html.classList.remove("menu-open")
    : null;

  // или так только больше кода а именно через if
  // if (targetElement.closest('.menu__link') && html.classList.contains('menu-open')) {
  // 	html.classList.remove('menu-open');
  // }
}
