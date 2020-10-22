var buttons = document.querySelectorAll('button');
var display = document.querySelector('#inputValue');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener ("click", myFunction);
}

function myFunction (event) {
  var val = event.target.value;
  if (val === "clear") {
    return (display.value = "");
  }
  if (val == "=") {
    var ekran =document.querySelector('#inputValue').value;
    return (display.value = eval(ekran));
  } else {
    display.value += val;
  }
  console.log (event.target.value);
}