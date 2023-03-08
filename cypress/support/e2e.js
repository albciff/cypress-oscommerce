// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// la propia plana de detall de beloved (http://sqademosatp.net/catalog/product_info.php?products_id=20)
// em tira la següent excepció que fa que els test fallin... per això deshabilitem el uncaught:exception
// product_info.php?products_id=20:79 Uncaught TypeError: Cannot read properties of undefined (reading 'substring')
//    at HTMLImageElement.<anonymous> (product_info.php?products_id=20:79:39)
//    at Function.each (jquery-1.11.1.min.js:2:2973)
//    at m.fn.init.each (jquery-1.11.1.min.js:2:835)
//    at Object.onComplete (product_info.php?products_id=20:78:23)
//    at o._callback (jquery.photoset-grid.min.js:9:445)
//    at m.fn.init.<anonymous> (jquery.photoset-grid.min.js:9:2720)
//    at s (jquery.photoset-grid.min.js:9:3054)
// )
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
