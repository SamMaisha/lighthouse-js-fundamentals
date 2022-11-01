const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("samies");
sayHello("Jajang");
sayHello("Conrad");

const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);

