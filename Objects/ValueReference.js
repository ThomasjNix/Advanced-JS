/*
JavaScript passes by value is most cases, but objects are passed by reference. This is different from some other OO languages where the option to pass by reference simply requires an additional character (for example, &)
*/

var a = 5;
var b = a;

console.log(a); // 5
console.log(b); // 5

/*
Of course this means that variables assigned by passing values can be changed without altering the original, since it's value is simply a copy of the original variables value
*/

b = 10;

console.log(a); // 5
console.log(b); // 10

/*
The same is not true for objects however, since the reference to the object in memory is passed. If the 'copy' is altered, so is the original.
*/

var c = {exampleValue : "Hello World!"};
var d = c;

console.log(c); // {exampleValue : "Hello World!"}
console.log(d); // {exampleValue : "Hello World!"}

d.exampleValue = "Hello Developers!";

console.log(c); // {exampleValue : "Hello Developers!"}
console.log(d); // {exampleValue : "Hello Developers!"}