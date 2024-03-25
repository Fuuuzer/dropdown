var dropdown = document.querySelector('.dropdown a');
var menuDrop = document.querySelector('.menu__dropdown');


dropdown.addEventListener("click", aparecerMenu);

function aparecerMenu() {
  menuDrop.classList.toggle('hidden');
};