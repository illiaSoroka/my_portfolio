const burger = document.querySelector('.header_burger');
const sidebar = document.querySelector('.sidebar_roll');
const li = document.querySelectorAll('.link');
burger.addEventListener('click', () => {
  if (sidebar.classList) {
    sidebar.classList.toggle('sidebar')
    for (let i = 0; i < li.length; i++) {
      li[i].addEventListener('click', () => {
        sidebar.classList.remove('sidebar')
      })
    }
  }
})