const burger = document.querySelector('.header_burger');
const sidebar = document.querySelector('.sidebar_roll');
const li = document.querySelectorAll('.link');

burger.addEventListener('click', () => {
  if (sidebar.style.display == 'none') {
    sidebar.style.display = 'block';
    for (let i = 0; i < li.length; i++) {
      li[i].addEventListener('click', () => {
        if (sidebar.style.display == 'block')
          sidebar.style.display = 'none';
      })
    }
  } else {
    sidebar.style.display = 'none';
  }
})