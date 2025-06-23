// let test = document.getElementById("positioned");
// test.addEventListener("mouseover", func, false);
let audio1 = new Audio('assets/1.wav');
let audio2 = new Audio('assets/2.wav');
let audio3 = new Audio('assets/3.wav');
let audio4 = new Audio('assets/4.wav');
let audio5 = new Audio('assets/5.wav');
arr = [audio1, audio2, audio3, audio4, audio5]
function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function func() {
  let elem = arrayRandElement(arr)
  elem.play();
}
