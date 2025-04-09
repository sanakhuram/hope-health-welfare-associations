export function initMenuToggle() {
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('menu-open');
      mainMenu.style.display =
        mainMenu.style.display === 'block' ? 'none' : 'block';
    });
  }
}
