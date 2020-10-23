//создание переменных
let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');
//отслеживание клика
menuToggle.addEventListener('click', function (event){
  //отмена стандартного поведения сслыки
  event.preventDefault;
  //вешается класс на меню при клике 
  menu.classList.toggle('visible')
})