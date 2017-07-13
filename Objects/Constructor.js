/*
* Since JavaScript does not have support for classes like some languages (Java, for example) a way to work around this is to use
* specific object creation patterns.
*
* Constructor is an object pattern used to mimic constructors in other languages. Similar to factories, the constructor pattern
* Takes in parameters, however the values are assigned to the object itself, rather than an object that is returned.
* Because of this, an instantiation pattern is needed when creating a new object.
*/

var constExample = function(param1, param2, param3){
  this.param1 = param1;
  this.param2 = param2;
  this.param3 = param3;

  this.printParams = function(){
    console.log("Param1: " + param1 + "\nParam2: " + param2 + "\nParam3: " + param3);
  };
};

exampleObject = new constExample(2,"String","Example");
exampleObject2 = new constExample("String2","Example2", 500);

exampleObject.constExample();
exampleObject2.constExample();


/*
UPDATE:

Since I have been studying JavaScript more closely with the "You Don't Know JS" serious and the "JavaScript: The Weird Parts" on Udemy, I have come to understand that attempting to copy class functionality (for example, constructors, inheritance, and polymorphism) in JavaScript is possible but not a strong method to achieve a goal. This is because JavaScript is NOT class oriented, it is actually object oriented, and functions by object behavior delegation and use of the lexical scope and [[Prototype]] chain. I am still learning more about this, but it is important to point out that, while possibly tempting and certainly more comfortable, attempting to mimic  class functionality in JavaScript may lead to code pitfalls and confusing debug scenarios.

*/