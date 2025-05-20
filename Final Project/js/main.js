document.addEventListener('DOMContentLoaded', () => {
  const navTarget = document.getElementById('navbar-container');
  if (navTarget) {
    fetch('navbar.html')
      .then(res => res.text())
      .then(html => {
        navTarget.innerHTML = html;
      });
  }
});
