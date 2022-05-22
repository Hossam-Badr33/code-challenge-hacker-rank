/*You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].*/

function destroyer(arr) {
    var valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
  }
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

  /* Code Explanation
Declare a variable named valsToRemove and set it equal to a new Array object from() the arguments passed into the function. 
Use the slice() method on the array of arguments, starting from the second index, 1.

Return the filtered array, using includes() in the callback function to check if val is not in valsToRemove; returning true to keep 
the value in the original array or false to remove it.*/