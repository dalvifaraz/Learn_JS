// // console.log(a, b, c);
// x = 99;
// var a = 10;
// let b = 100;
// var a = 1;
// b = 200;
// const c = 1000;
// // c = 2000;
// console.log(a, b, c, x);


// let m = 2;
// function s() {
//   console.log(m);
// }
// s();
var a = 100;
let b = 1000;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a, b, c);
}
console.log(a, b);