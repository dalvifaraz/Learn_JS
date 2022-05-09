//this refers to the object on which the funtion is call.
let name = "FARAZ";
function displayName() {
  console.log(this.name, this);
};
displayName();
window.displayName();

let obj1 = {
  name: "AYAZ",
  displayName: displayName
};

let obj12 = {
  name: "DALVI",
  displayName: displayName
};

obj1.displayName();
obj12.displayName(); 