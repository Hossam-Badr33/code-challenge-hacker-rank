//1st soln
function catAndMouse(x, y, z) {
    if (Math.abs(x-z) == Math.abs(y-z)) {
        console.log("Mouse C");
    }
    else if(Math.abs(x-z) > Math.abs(y-z)) {
        console.log("Cat B");
    } else {
        console.log("Mouse Z");
    }
}
catAndMouse(1,3,2)
//2nd soln
function catAndMouse(x, y, z) {
    const distAFromM = Math.abs(x-z);
    const distBFromM = Math.abs(y-z)
    if (distBFromM > distAFromM) return "Cat A";
    else if (distAFromM>distBFromM) return "Cat B";
    return "Mouse C";
}
catAndMouse(1,3,2)