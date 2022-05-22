function truncateString(str, num) {
    new_str = "";
    if (str.length > num) {
        new_str = str.slice(0, num);
    }
    else {
        new_str = str;
    }
    return new_str;
  }
  
  //console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

  function truncateString(str, num) {
      new_str1 = str
      if (str.length > num ? new_str1 = str.slice(0,num) : new_str1 = str) {
  }
  return new_str1;
}
//console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function truncateString(str, num) {
    return str.length > num ? str.slice(0,num) + "....." : str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));