(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('headerActive');
    } else {
      header.classList.remove('headerActive');
    }
  };
})();
