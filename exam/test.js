const obj = require("./221201");

console.log(obj.str);

setTimeout(() => {
  console.log(obj.str);
}, 2000);
