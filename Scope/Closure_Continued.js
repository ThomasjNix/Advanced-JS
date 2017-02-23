/*
* Here is another example of a closure.
* In this, the inner function add takes the passed value from the higher level
* addTo function as well as the inner that it is passed and returns the sum of them.
*
* The addTo function returns the add function itself.
* addTo(3) passes the value of 3 to passed of the addTo function (higher level). At this point, inner is still undefined.
*/
var addTo = function(passed){
  var add = function(inner){
    return passed + inner;
  };
  return add;
};

addTo(3); /* The result of this call is the function add with a Closure of 3. The passed value is preserved when returning the function!
          * This is because the add function searches outside of it's own scope for the passed value, and finds it.
          * The inner value is still not defined at this point
          */

var addThree = addTo(3); /*This creates a variable called addThree which is actually the funciton previously listed.
                        * The value of addThree is actually the function add from above with the value 3 received from
                        * it's parent function's passed value. The value is preserved. We now have a function that will add
                        * three to any value we give it!
                        */

console.log(addThree(2)); /* Here we are passing 2 to the value of addThree. addThree has the closure of 3 from
                          * The scope of it's parent function from when it was created (passed), and now we are providing a value
                          * for the scope of add itself (inner). This will produce 3 (passed, closure) + 2 (inner, provided), which is 5.
                          */
