const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.container-menu');
const MenuList = document.querySelector('.menu-list');
document.querySelector('.hamburger');addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('active');
  sideMenu.classList.toggle(".side-menu");
});
