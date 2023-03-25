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

new fullpage('#fullpage', {
  autoScrolling:true,
  navigation: true,
  anchors: ['AboutUs', 'Section2', 'Section3'],
  navigationTooltips: ['About Us', 'Home', 'Contacts'],
  controlArrows: false,
  slidesNavigation: true
});