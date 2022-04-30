// //simple example of closure without return a funtion
// function x() {
//   let a = 99;
//   function z() {
//     console.log(a);
//   }
//   a = 100;
//   z();
// }
// x();

// closure
// function x() {
//   let a = 99;
//   function z() {
//     console.log(a);
//   }
//   a = 100;
//   return z;
// }
// var n = x();
// n();

//complex closure
// function n() {
//   let c = 55;
//   function x() {
//     let a = 99;
//     function z() {
//       console.log(a, c);
//     }
//     a = 100;
//     z();
//   }
//   x();
// }
// n();

//closures along with settimeout
// function x() {
//   let i = 99;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("print b4");
// }
// x();

function x() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
      console.log("value", i);
    }, i * 1000);
  }
  console.log("print b4 value of i");
}
x();