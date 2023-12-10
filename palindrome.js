/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let palindrome = str.toLowerCase()
  let reversestr = palindrome.split('').reverse().join('')
  if(palindrome===reversestr){
  return true;
  }else{return false}
}

console.log(isPalindrome("aaa"))




module.exports = isPalindrome;
