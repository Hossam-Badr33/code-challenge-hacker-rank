/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal 
value of each fraction on a new line with  places after the decimal.
Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error 
of up to (10 e4) are acceptable.*/

//1st soln with if-loop
arr = [1,1,0,-1,-1]
function PlusMinus(arr) {
    var Positive_num = 0;
    var negative_num = 0;
    var zero_num = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] >0) {
        Positive_num ++;
        }
        else if (arr[i] <0) {
            negative_num ++;
        }
        else {
            zero_num ++;
        }
    }
    let Positive_value = (Positive_num/arr.length).toFixed(6);   // to convert int to float we use toFixed(number of decimal)
    let Negative_value = (negative_num/arr.length).toFixed(6);
    let Zero_value = (zero_num/arr.length).toFixed(6);
    console.log(Positive_value + '\n' +Negative_value + '\n' +Zero_value);
    
}
PlusMinus(arr);

//2nd soln with       arr.map()
arr = [1,1,0,-1,-1]
function PlusMinus(arr) {
    var Positive_num = 0;
    var Negative_num = 0;
    var Zero_num = 0;
    arr.map(ele => {
        if(ele >0) {
            Positive_num++;
        }
        else if (ele<0) {
            Negative_num++;
        }
        else {
            Zero_num++;
        }
    })
    let Positive_value = (Positive_num/arr.length).toFixed(6);   // to convert int to float we use toFixed(number of decimal)
    let Negative_value = (Negative_num/arr.length).toFixed(6);
    let Zero_value = (Zero_num/arr.length).toFixed(6);
    console.log(Positive_value);
    console.log(Negative_value);
    console.log(Zero_value);
}
PlusMinus(arr);
