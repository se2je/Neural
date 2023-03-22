const onTopBtn = document.querySelector('.onTopBtn')

onTopBtn.addEventListener('click', function(){
    window.scrollTo(0, 0)
})

const burger = document.querySelectorAll('.burger')
const header = document.querySelector('.header')

burger.forEach(element => {
  element.addEventListener('click', function(){
    header.classList.toggle('show-header')
  })
});

window.onload = function() {
  document.body.classList.add('loaded');
};