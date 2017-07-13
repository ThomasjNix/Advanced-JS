/*
* Since JavaScript does not have support for classes like some languages (Java, for example) a way to work around this is to use
* specific object creation patterns.
*
* Factory is an object creation pattern that uses a function (an object) and assigns a temporary object values based off the parameters that are
* passed in. The object is returned, and we can think of this as functioning like a class in other langues.
*/

var factoryExample = function(param1, param2, param3){
  var tempObject = {};

  tempObject.param1 = param1;
  tempObject.param2 = param2;
  tempObject.param3 = param3;

  tempObject.printParams = function(){
    console.log("Param1: " + param1 + "\nParam2: " + param2 + "\nParam3: " + param3);
  };

  return tempObject;
};


exampleItem = factoryExample("String", 2, "Second string");
exampleItem2 = factoryExample(200, "Example", 27);

exampleItem.printParams();
exampleItem2.printParams();


/*
UPDATE:

Since I have been studying JavaScript more closely with the "You Don't Know JS" serious and the "JavaScript: The Weird Parts" on Udemy, I have come to understand that attempting to copy class functionality (for example, constructors, inheritance, and polymorphism) in JavaScript is possible but not a strong method to achieve a goal. This is because JavaScript is NOT class oriented, it is actually object oriented, and functions by object behavior delegation and use of the lexical scope and [[Prototype]] chain. I am still learning more about this, but it is important to point out that, while possibly tempting and certainly more comfortable, attempting to mimic  class functionality in JavaScript may lead to code pitfalls and confusing debug scenarios.

*/