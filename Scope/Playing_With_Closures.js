//Fun little script to sing the "100 bottles of beer on the wall" song using closures

var MultiplierArray = [];

var createAddTo = function(passedInValue){
  addTo = function(innerValue){
    return passedInValue + innerValue;
  };
  return addTo;
};

for (var i = 0; i < 100; i++){
  var tempFunc = createAddTo(i);
  MultiplierArray.push(tempFunc);
}

for (var arrCounter = MultiplierArray.length-1; arrCounter > 0 ; arrCounter--){
  var bottlesOfBeer = MultiplierArray[arrCounter](1);
  console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer...\n" +
                "Take one down, pass it around, " + --bottlesOfBeer + " bottles of beer on the wall!");
}
