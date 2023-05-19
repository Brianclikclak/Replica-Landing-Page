const submenu = document.querySelectorAll('.menu_vertical');

submenu.forEach((submenu) => {
  submenu.addEventListener('mouseleave', () => {
    submenu.style.display = 'none';
  });
});


