/* [4,4,3,2] here The maximum height candles are  4 units high. There are two of them, so return 2.*/

function birthdayCakeCandles(ar) {
    let max =0;
    let candles = 0;
    for (let i=0; i<ar.length; i++) {
        if (max<ar[i]) {
            max = ar[i];
        }
        
            }
            for (let i=0; i<ar.length; i++) {
            if(max == ar[i]) {
                candles ++;
        }
    }
    return candles;
}
let ar = [3,3,2,1]
console.log(birthdayCakeCandles(ar));