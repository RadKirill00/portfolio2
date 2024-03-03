let elem = document.getElementById("elem");

function func(name, surname) {
  console.log(this.value + ", " + name + " " + surname);
}

let newfunc = func.bind(elem);

newfunc("John", "Smit"); 
newfunc("Eric", "Luis"); 
