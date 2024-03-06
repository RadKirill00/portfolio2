let btn1 = document.querySelector("#start");
let btn2 = document.querySelector("#end");
let p = document.querySelector("p");
let time = 100;
let timer;

btn1.addEventListener("click", function func() {
  timer = setInterval(function () {
    p.textContent = --time;
    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);

  this.removeEventListener("click", func);
});

btn2.addEventListener('click', function func2() {
  clearInterval(timer);
  btn1.addEventListener('click', function() {
    timer = setInterval(function () {
      p.textContent = --time;
      if (time === 0) {
        clearInterval(timer);
      }
    }, 1000);
  })
})
