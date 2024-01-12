// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names  = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-flavour'); 
require('./mind-gernade')

console.log(data);
sayHi('Bob');
sayHi(names.john);
sayHi(names.peter);