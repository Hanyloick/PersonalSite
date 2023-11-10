window.addEventListener("load", function () {
  init();
});

function init() {
  disableCarouselTimer();
  darkModeToggle();
}

function disableCarouselTimer() {
  document
    .getElementById("projectCarousel")
    .setAttribute("data-interval", "false");
}

function darkModeToggle() {
  document.getElementById("btnSwitch").addEventListener("click", () => {
    const body = document.body;
    const themeStyle = document.getElementById('theme-style');
  
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      themeStyle.href = 'css/light-theme.css';
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      themeStyle.href = 'css/dark-theme.css';
    }
  });
}

