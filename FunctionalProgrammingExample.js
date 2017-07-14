var checkForEach = function(arr, fn){
    newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
};

var checkForLessThan = function(limit){
    return function(limit, arrayIndex){
        return (arrayIndex < limit);
    }.bind(this, limit);
};

var arrExample = [1, 6, 19, 22, 8, 3];
var boolArray = checkForEach(arrExample, checkForLessThan(5)); // [true, false, false, false, false, true]


/*
What's happening:

-checkForEach runs through each element of the array and calls a function on the element, returning the output of the function and pushing that to the new array it created.
-checkForLessThan takes a limit and returns a function that uses that limit along with an additional parameter, the array index, and this inner function returns if the array index is less than the limit.
--Since the loop inside of checkForEach calls a function that takes only one parameter, we bind the limit passed to checkForLessThan() to the return function, effectively setting a permanent
--first parameter ('limit'), so that the only parameter it needs is the array index.
-We call checkForEach and pass the array and the checkForLessThan function with a limit of 5

+For each element in the array we pass in, it runs checkForLessThan(arrayIndex)
+This checks if the array index is less than the limit, which is bound to be 5 since we called it with a pass in value of 5
+it returns a boolean value, which is stored in the new array
+boolArray is set to this new array that is returned from checkForEach

*/