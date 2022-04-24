//hoisting - access the value of variable or funtion even b4 they are intialized...
getName();
// getName2();
// getName3();
console.log("value of x", x);

var x = 7;


//it will store this funtion in memory as it is
function getName() {
  console.log("GET Name funtion");
}

//as it is a arrow funtion it will store this funtion in memory undefined so it will give error if called before declaration
var getName2 = () => {
  console.log("Arrow Funtion");
};


//as it is stored inside the variable it will give it will store this funtion in memory as undefined so it will give error if called before declaration
var getName3 = function () {
  console.log("Funtion stored in variable ");
};