const validator = require("validator");
const getNotes = require("./notes");

console.log(getNotes());

console.log(validator.isURL("http://fdd.com"));
