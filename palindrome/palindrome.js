function palindrome(str) {

  //Remove special characters from string using RegEx
  str = str.replace((/[\W_]/g), '');

  //converts string to uppercase
  str = str.toUpperCase();

  //Creates reversed copy of str
  let strReverse = str.split("").reverse().join("")

  if (str != strReverse) {return false;}
  else {return true;}

}

console.log(palindrome("My age is 0, 0 si ega ym"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"))