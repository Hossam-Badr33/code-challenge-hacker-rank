//let arr = [2,5,4,5,2]
function hurdleRace(k, height) {
    // Write your code here
    let MaxHeight = 0;
    for (let i=0; i<height.length; i++){
        if(height[i]>MaxHeight) {
            MaxHeight = height[i];
            
        }
    }
    //console.log(MaxHeight)
    if(MaxHeight > k) return MaxHeight-k;
    else return 0;
}
console.log(hurdleRace(7, [2,5,4,5,2]));