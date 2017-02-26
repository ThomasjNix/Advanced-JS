/*
Callback functions are also known as higher level functions. In JS, functions are objects (like most things). This is how callback functions are utilized.
Functions can be passed to functions, called from functions, and return functions. Functions are objects and objects are functions, all hail functionality!
*/

var toBeCalledBack = function(){
  console.log("This will be printed - CALLBACK");
};

var toCall = function(callback){
  console.log("About to call the callback function...");
  callback();
};

toCall(toBeCalledBack);
