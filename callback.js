console.log("CALLBACK");
/*

setTimeout(function () {
  console.log("Timer...");
}, 5000);

// x(y);

function x(y) {
  console.log("X");
  y();
}

x(function y() {
  console.log("Y");
}); 

*/

/* function closure() {
  let count = 0;
  document.getElementById('clickMe').addEventListener('click',
    function onClickFuntion() {
      console.log("CLICKED", ++count);
    });
}
closure(); */


let count = 0;
document.getElementById('clickMe').addEventListener('click',
  function onClickFuntion() {
    console.log("CLICKED", ++count);
  });
