/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (x1 < x2 && v2 > v1) {
    return "NO";
  } else {
    const y = (x2 - x1) / (v1 - v2);
    /*explain => y jump of each kangaro which replace time in physical law
    speed = distnce (total distance) / time
    s = d / t (time)
    s = d / y (jumps)
    d (total distance) = s * y
    d (total distance) = (v1 * y) + x1 => for kangaroo1 must be === equal to kangaroo 2 by another way reminder is 0
    x1 + (y * v1) = x2 + (y * v2)
    (y * v1) = x2 + (y * v2) - x1
    (y * v1) - (y * v2) = x2 -x1
    y (v1 - v2) = x2 -x1
    y = (x2 - x1) / (v1 - v2)
    if y is integer they mostly met 2 kangoors together
    if not they will never met together
    */
    // if (Number.isInteger(y)) 
    if ((x2 - x1) % (v1 - v2) === 0) 
    {
      return "YES";
    } else {
      return "NO";
    }
  }
}
console.log(kangaroo(0, 3, 4, 4));
console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(21, 6, 47, 3));
let number = 10.3;
console.log(Number.isInteger(number));
