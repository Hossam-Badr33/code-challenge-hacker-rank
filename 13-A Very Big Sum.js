/*n this challenge, you are required to calculate and print the sum of the elements in an array, 
keeping in mind that some of those integers may be quite large.*/

arr= [1000000001,1000000002, 1000000003, 1000000004, 1000000005]
function VeryBigSum(arr) {
    var num =0
    for (var i=0; i<arr.length;i++) {
        num += arr[i];
    }
    return num;
}
console.log(VeryBigSum(arr));
