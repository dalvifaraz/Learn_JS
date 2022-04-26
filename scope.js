var x = 1;

function a() {
  var x = 10;
  c();
  function c() {
    // var x = 100;
    console.log(x, "C");
  }
  console.log(x, "A");
}
a();
console.log(x, "G");