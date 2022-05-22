/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their 
corresponding HTML entities.
convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List") should return the string Schindler&apos;s List.
convertHTML("<>") should return the string &lt;&gt;.*/

//1st soln
function convertHTML(str) {
    var temp_str = str.split("");
    for (i=0; i<str.length; i++) {
        switch(temp_str[i]) {
            case "&": 
                temp_str[i] = "&amp"
                break;
            case "<": 
                temp_str[i]= "&lt;"
                break;
            case ">": 
                temp_str[i]= "&gt;"
                break;
            case '"' : 
                temp_str[i]= "&quot;"
                break;
            case "'" : 
                temp_str[i]= "&apos;"
                break;
            case "<>" : 
                temp_str[i]= "&lt;&gt;"
                break;
        }
    }
    temp_str = temp_str.join()
    console.log(temp_str)
    return temp_str;
}
convertHTML("Dolce & Gabbana");

//2nd soln
function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML("Dolce & Gabbana");
