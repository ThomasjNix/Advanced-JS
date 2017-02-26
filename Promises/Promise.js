var promiseToCleanRoom = new Promise(function(resolve, reject){

  //Here we would find out whether the promise condition is met or not
  var roomIsClean = true;

  //We then say that if the promise is fulfilled, we call the resolve
  //callback function and pass any parameters we may need for a met promise condition.
  //Otherwise, we reject it and can do the same.
  if (roomIsClean){
    resolve('Clean');
  }else{
    reject('Not clean');
  }
});

//Promises have a .then() function that can take a callback function
//The callback function takes a parameter that is actually given from the resole method above.
//.then() only fires when the promise is met!

//.catch() is chained on and functions similarly to .then(), except it operates on the reject
//method. This is similar to a try/catch block in some other languages.
promiseToCleanRoom.then(function(fromResolve){
  console.log("The room is " + fromResolve);
}).catch(function(fromReject){
  console.log("The room is " + fromReject);
});
