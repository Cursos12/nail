document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav.menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  const menuItems = document.querySelectorAll('.menu > ul > li');

  menuItems.forEach(item => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      item.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault(); // impede navegação no mobile
          item.classList.toggle('open');
        }
      });
    }
  });
});