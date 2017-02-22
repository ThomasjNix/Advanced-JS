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
