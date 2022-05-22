// Reverse a String 'hello'
//1st soln
function reverseString(str) {
    let rev_str = "";
    for (let i = str.length -1; i >=0; i--) {
        rev_str += str[i];
    } 
    return rev_str;
}
console.log(reverseString("hello"));

// 2nd soln
function reverseString(str) {
    console.log(str.split('').reverse().join(''))
    return str;
  }
  reverseString("hello");

//3rd
const str1 = "hossam";
let name1 = str1
  .split('')
  .reverse()
  .join('');
console.log(name1);
