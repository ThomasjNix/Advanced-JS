//Here is a simple chores script that shows how promises can
//Require multiple conditions to be met before the necessary output is returned.

roomClean = false;
trashOut = false;
allowance = false;

setClean = function(){
  roomClean = true;
};
takeOutTrash = function(){
  trashOut = true;
};
giveAllowance = function(){
  if (roomClean && trashOut){
    allowance = true;
  }
};

var cleanRoom = function(){
  return new Promise(function(resolve, reject){
    if (roomClean){
      resolve("1. Cleaned the room\n");
    }else{
      reject("1. Room not clean!\n");
    }
  });
};

var tookOutTrash = function(msg){
  return new Promise(function(resolve, reject){
    if(trashOut){
      resolve(msg + "2. Trash taken out\n");
    }else{
      reject(msg + "2. Trash not taken out!\n");
    }
  });
};

var receiveAllowance = function(msg){
  return new Promise(function(resolve, reject){
    if (allowance){
      resolve(msg+ "3. Allowance due\n");
    }else{
      reject(msg + "3. There's some other reason you don't get an allowance!\n");
    }
  });
};

setClean();
takeOutTrash();
giveAllowance();

cleanRoom().then(function(res_msg){
  return tookOutTrash(res_msg);
}).then(function(res_msg){
  return receiveAllowance(res_msg);
}).then(function(res_msg){
  console.log(res_msg + "\nFirst Method result: Enjoy your allowance!");
}).catch(function(res_msg){
  console.log(res_msg);
});


/*
Explanation of this script:

This script is a little allowance checksheet using promises. It has 3 conditions:
1. Did you clean your room?
2. Did you take the trash out?
3. Do you have any other conditions keeping you from getting an allowance? (Let's say you're grounded)

First the cleanRoom() function is called, it returns a promise.
  If the cleanRoom promise passes, it passes it's message to the receiveAllowance promise
  |- If the tookOutTrash promise passes, it passes it's message to the receiveAllowance promise
  |--- If the receiveAllowance promise passes, it prints its message and tells the chore-doer to enjoy their funds
  |--- If the receiveAllowance promise fails, it will print the message of why it failed.
  |- If the tookOutTrash promise fails, it will print the message of why it failed.
  If the cleanRoom promise fails, it will print the message of why it failed.

You can play around with the setClean(), takeOutTrash(), and giveAllowance() functions to see
how the script works for different combinations of true and false values.

*/


//This is another way to test multiple promises, if all you are concerned about
//is if the promises all pass or not. Using this way I'm not sure you could
//print a trace of resolve or reject messages.
//.race() could also be used to check that at least one finishes, and to
//tell which finishes first.

Promise.all([cleanRoom(), tookOutTrash(), receiveAllowance()]).then(
  function(){
    console.log("Second Method result: Enjoy your allowance!");
  }
).catch(
  function(){
    console.log("Second Method result: No allowance for you!");
  });
