function gradingStudents(grades) {
  // 1st long soln
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      grades[i] = grades[i];
    } else {
      let div = Math.floor(grades[i] / 5);
      let num1 = div * 5;
      div = Math.abs(num1 - grades[i]);
      switch (div) {
        case 1:
          grades[i] = num1 + div;
          break;
        case 2:
          grades[i] = num1 + div;
          break;
        case 3:
          div = 5;
          grades[i] = num1 + div;
          break;
        case 4:
          div = 5;
          grades[i] = num1 + div;
          break;
        case 0:
          grades[i] = num1 + div;
          break;
      }
    }
  }
  return grades;
}
//2nd short soln easy, fast
function gradingStudents2(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % 5 >= 3) {
      grades[i] = grades[i] + Math.abs((grades[i] % 5) - 5);
    } else {
      grades[i] = grades[i];
    }
  }
  return grades;
}
arr = [35, 38, 61, 62, 63, 64, 65, 74];
console.log(gradingStudents(arr));
console.log(gradingStudents2(arr));
// console.log(62 % 5);
