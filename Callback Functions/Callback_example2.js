var anArray = [{num: 5, str: 'Oranges'},
              {num: 10, str: 'Apples'},
              {num: 1337, str: 'Skills'}
];

//Here the anonymous function passed to sort() can be used to determine what
//you want to sort on and in what order. In this example, the array is
//being sorted in descending order by the num variable.
anArray.sort(function(value1, value2){
  if (value1.num > value2.num){
    return -1;
  }else {
    return 1;
  }
});

console.log(anArray);
