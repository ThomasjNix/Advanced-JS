/*
* Since JavaScript does not have support for classes like some languages (Java, for example) a way to work around this is to use
* specific object creation patterns.
*
* Prototyping is different than factory or constructor patterns. Prototyping is special in javascript in that it creates a bank of stored
* values for the object. When creating an object with preset values, you have n number of values per object per instantiation.

* Prototyping defeats this by creating a shared pool of values / functions / etc. that are used as DEFAULT values that can be
* overridden if need be. This is a great way to create default values for every instance of an object that is created
* without needing every object to have it's own set of default values.
*/

var protoObject = function(){};

protoObject.prototype.param1 = "String";
protoObject.prototype.param2 = "Example";
protoObject.prototype.param3 = 2;

protoObject.prototype.printParams = function(){
  console.log("Param1: " + this.param1 + "\nParam2: " + this.param2 + "\nParam3: " + this.param3);
};

exampleObject = new protoObject();
exampleObject.param2 = "NOT Example!";

exampleObject.printParams();
