/*challenge  compareTriplets*/
// let arr1 = [4, 2, 4];
// let arr2 = [3, 5, 3];
// function compareTriplets(a, b) {
//   // Write your code here
//   let arr = [],
//     x = 0,
//     y = 0;
//   for (let i = 0; i < 3; i++) {
//     if (a[i] > b[i]) {
//       x++;
//     } else if (a[i] === b[i]) {
//     } else {
//       y++;
//     }
//   }
//   arr[0] = x;
//   arr[1] = y;
//   return arr;
// }
// console.log(compareTriplets(arr1, arr2));

/*challenge  aVeryBigSum*/
// function aVeryBigSum(ar) {
//   // Write your code here
//   let result = 0;
//   for (const num of ar) {
//     result += num;
//   }
//   return result;
// }
// let array = [50, 100, 200, 300];
// console.log(aVeryBigSum(array));

/*challenge  diagonalDifference*/
// function diagonalDifference(arr) {
//   // Write your code here
//   let left = 0;
//   let right = 0;
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     left += arr[i][i];
//   }
//   for (let i = 1; i < arr.length + 1; i++) {
//     right += arr[i - 1][arr.length - i]; //see below logic
//   }
//   result = Math.abs(left - right);
//   return result;
// }
// let arrays = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];
// console.log(diagonalDifference(arrays));

/*challenge  staircase (1st soln) 
challenge idea
var mystr = 'is my name.';
mystr = mystr.replace (/^/,'John ');
console.log(mystr);
----------------
console.log(`${arr.length - 1} ${arr.length - 2} ${arr.length - 3}`);
console.log(arr[0][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
string in js is immutable so:
var name_ = "    #"; //length => 5 (3-2-1-0) (4-3-2-1)
//                            length-2 i-- length-1 i--
console.log(name_);
for (let i = name_.length; i > 1; i--) {
  name_ = name_.substring(0, i - 2) + "#" + name_.substring(i - 1);
  //console.log(name_);
}
console.log(name_);
name_ = name_.substring(0, name_.length-3) +"#" + name_.substring(name_.length-2);
console.log(name_);
name_ = name_.substring(0, name_.length-4) +"#" + name_.substring(name_.length-3);
console.log(name_);
name_ = name_.substring(0, name_.length-5) +"#" + name_.substring(name_.length-4);
// console.log(name_);
*/
// function staircase(n) {
//   let hash = "#";
//   for (let i = 0; i < n - 1; i++) {
//     hash = hash.replace(/^/, " ");
//   }
//   for (let i = hash.length; i > 0; i--) {
//     console.log(hash);
//     hash = hash.substring(0, i - 2) + "#" + hash.substring(i - 1);
//   }
// }
//staircase(15);
/*
challenge  staircase (2nd soln) 
soln idea 
num = "5" => 0,1,2,3,4
ssss# => S=4(num - i -1)   #=1(i + 1)
sss## => S=3(num - i -1)   #=2(i + 1)
ss### => S=2(num - i -1)   #=3(i + 1)
s#### => S=1(num - i -1)   #=4(i + 1)
##### => S=0(num - i -1)   #=5(i + 1)
 */
// function printHash(n) {
//   for (let i = 0; i < n; i++) {
//     let space = "";
//     for (let j = 0; j < n - i - 1; j++) {
//       space += " ";
//     }
//     for (let k = 0; k < i + 1; k++) {
//       space += "#";
//     }
//     console.log(space);
//   }
// }
// printHash(5);
/*
challenge  staircase (3rd soln) 
 */
// function staircase (n) {
// for (let i=1; i<=n; i++) {//i=> 1,2,3,4
//   let str = "";
//   for (let j=0; j<n; j++) {//0,1,2,3
//     if (j<n-i) str += " "; //n-i = 3,2,1,0
//     else str += "#";
//   }
//   console.log(str);
// }
// }
// staircase(4);

/*
challenge miniMaxSum
 */
//let array = [1, 3, 5, 7, 9];
// let array = [5, 5, 5, 5, 5];
// console.log(Math.max(...array));
// function miniMaxSum(arr) {
//   // Write your code here
//   let min = 0;
//   let max = 0;
//   let newArr = [];
//   if (Math.max(...arr) === Math.min(...arr)) {
//     arr.pop();
//     for (let i = 0; i < arr.length; i++) {
//       min += arr[i];
//       max += arr[i];
//     }
//     console.log(`${min} ${max}`);
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < Math.max(...arr)) {
//         min += arr[i];
//       }
//     }
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > Math.min(...arr)) {
//         max += arr[i];
//       }
//     }
//     console.log(`${min} ${max}`);
//   }
// }
// miniMaxSum(array);
