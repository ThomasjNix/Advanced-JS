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
