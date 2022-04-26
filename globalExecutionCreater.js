//Shortest JS Program
//Even if file doest have any thing some variable is created
// this is global variable
//namely window and this variable
//this === window
var a = 1110;
b();
function b() {
  var c = 10;
  console.log(c);
  console.log(window.a, "W");
}
console.log(a, "G");