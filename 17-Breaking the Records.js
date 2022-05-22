// 3 4 21 36 10 28 35 5 24 42            max 4   min 0
//let scores = [10,5,20,20,4,5,2,25,1]   max 2   min 4

let scores1 = [3,4,21,36,10,28,35,5,24,42]
//1st soln
function breakingRecords(scores1) {
    let max = scores1[0];
    let count_max = 0;
    let min = scores1[0];
    let count_min = 0;
    for (let i=1; i<scores1.length; i++) {
        if(scores1[i] > max) {
            max = scores1[i];
            count_max += 1;
        }   
        if(scores1[i] < min) {
            min = scores1[i];
            count_min += 1;
        }
    }
    console.log([count_max, count_min]);
}
breakingRecords(scores1);

//2nd soln
let scores = [10,5,20,20,4,5,2,25,1]
function breakingRecords(scores) {
    let max = scores[0];
    let count_max = 0;
    let min = scores[0];
    let count_min = 0;
    const helper= (allscores) => {
        allscores.shift();
        if (allscores.length<1) return
        if (allscores[0] > max) {
            max = allscores[0];
            count_max += 1; 
    }
        if(allscores[0] < min) {
            min = allscores[0];
            count_min += 1;
    }
    helper(allscores);
}
helper(scores);
console.log([count_max, count_min]);
}
breakingRecords(scores);

