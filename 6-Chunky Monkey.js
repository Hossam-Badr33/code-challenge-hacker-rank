/*Write a function that splits an array (first argument) into groups the length of 
size (second argument) and returns them as a two-dimensional array.
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].*/

//1st soln
let newArr = [];
function chunkArrayInGroups(arr, size) {
    // Break it up.
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
      console.log(arr[i]);
    }
    return newArr;
  }
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
  console.log(newArr)
  //2nd SVGPolygonElementfunction chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArr = [];
    let i = 0;
  
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);