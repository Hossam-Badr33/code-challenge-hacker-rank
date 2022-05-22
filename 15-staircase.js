/* num =6
S---> Space  S= num-i-1    ,,  # = i+1

   SSSSS#        S= 5    # = 1
   SSSS##        S= 4    # = 2
   SSS###        S= 3    # = 3
   SS####        S= 2    # = 4
   S#####        S= 1    # = 5
   ######        S= 0    # = 6
   */
  
function staircase(num) {
    for (let i=0; i<num; i++) {
        let str= "";
        for (let j=0; j<num-i-1; j++) {
        str += " ";
        }
        for (let k=0; k<i+1; k++) {
        str += '#';
        }
        console.log(str);
    }
}
staircase(6);