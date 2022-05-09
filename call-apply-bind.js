console.log("CALL / APPLY / BIND");
obj1 = {
  name: "FARAZ",
  displayName: function (age) {
    console.log("NAME", this.name, "AGE", age);
  }
};
obj2 = {
  name: "AYAZ"
};
obj1.displayName();
//CALL
obj1.displayName.call();
obj1.displayName.call(obj2);
obj1.displayName.call(obj2, 58);
//APPLY
obj1.displayName.apply();
obj1.displayName.apply(obj2);
obj1.displayName.apply(obj2, [58]);
//BIND
var x;
x = obj1.displayName.bind();
x();
x = obj1.displayName.bind(obj2);
x();
x = obj1.displayName.bind(obj2, 58);
x();
