/*
* Technically speaking, any function where you use a value from outside the scope of the function
* is considered a closure.
*
* The variable passedInValue is not defined within the function, so the function addValue will look outward
* for the variable. Here passedInValue is defined globally. If it is not found at any level, it will be undefined.
*/

var passedInValue = 3;

var addValue = function(){
  var innerValue = 2;
  return passedInValue + innerValue;
};

var passedInValue = 4;

// Explore this in Chrome's dev tools. You will notice under Closure, passedInValue is 4.
console.dir(addValue);
