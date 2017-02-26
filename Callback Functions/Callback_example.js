//This is an example given to show one way to create a function that
//Takes two numbers and a string and either adds or multiplies them.

var calculate = function(num1, num2, calcType){
  if (calcType == "add"){
    return num1+num2;
  }else if (calcType == "multiply"){
    return num1*num2;
  }
};

console.log("[Original way] Calculating... " + calculate(3,5,"multiply"));
console.log("[Original way] Calculating... " + calculate(3,5,"add"));

//This is another way to do the function using callbacks. You can see it's
//a lot more abstracted.

var add = function(exNum1, exNum2){
  return exNum1+exNum2;
};

var multiply = function(exNum1, exNum2){
  return exNum1*exNum2;
};

var callback_calc = function(exNum1, exNum2, callback){
  return callback(exNum1, exNum2);
};

console.log("[New way] Calculating... " + callback_calc(3,5,multiply));
console.log("[New way] Calculating... " + callback_calc(3,5,add));
//Check the console to see that these two ways of calculating are identical in output!

//You can see the real purpose of callback functionality here. Where as above you can
//Only get results based on what is defined in calculate(), here you can simply
//give callback_calc any function with the same input and have unlimited potential.
var printNums = function(exNum1, exNum2){
  return "The two numbers given are " + exNum1 + " and " + exNum2 + ".";
};
console.log(callback_calc(3,5,printNums));
