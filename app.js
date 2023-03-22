const onTopBtn = document.querySelector('.onTopBtn')

onTopBtn.addEventListener('click', function(){
    window.scrollTo(0, 0)
})


const consoleText = "I was made by ChatGPT, say thanks!";
const consoleEl = document.getElementById('console-text');
let consoleTimerId;
let index = 0;

function printConsoleText() {
  consoleEl.textContent += consoleText[index];
  index++;

  if (index >= consoleText.length) {
    clearInterval(consoleTimerId);
    setTimeout(function() {
      eraseConsoleText();
    }, 1000);
  }
}

function eraseConsoleText() {
  consoleTimerId = setInterval(function() {
    consoleEl.textContent = consoleEl.textContent.slice(0, -1);

    if (consoleEl.textContent === '') {
      clearInterval(consoleTimerId);
      index = 0;
      setTimeout(function() {
        printConsoleText();
      }, 1000);
    }
  }, 50);
}

setTimeout(function() {
  printConsoleText();
}, 1000);



const burgerOpen = document.querySelectorAll('.burger')
const header = document.querySelector('.header')

burger.forEach(element => {
  element.addEventListener('click', function(){
    header.classList.toggle('show-header')
    alert('')
  })
});