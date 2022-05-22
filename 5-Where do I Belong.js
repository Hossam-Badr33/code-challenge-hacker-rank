/* For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0),
 but less than 2 (index 1).
Hint 1
The first thing to do is sort the array from lower to bigger, just to make the code easier. 
This is where sort comes in, it needs a callback function so you have to create it.
Hint 2
Once the array is sorted, then just check for the first number that is bigger and return the index.
Hint 3
If there is no index for that number then you will have to deal with that case too.*/

let array = [15,4,11,20,8];
function getIndexToIns(arr, num) {
    arr.sort(
    function(a,b) {
        return a-b;
    });
    for (let i=0; i< arr.length; i++) {
        if (arr[i] >= num) {
            return i;
    }
}
    return arr.length;
}
console.log(getIndexToIns(array, 10));
console.log(array);