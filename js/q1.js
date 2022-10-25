let s = "A man, a plan, a canal: Panama";

let s1 = "race a car";

let s2 = "";

function lowerCaseAlphanumeric(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/gi, "");
  return str;
}

function checkIfPalindrome(str) {
  let strOrg = lowerCaseAlphanumeric(str);
  let strRev = strOrg.split("").reverse().join("");
  return strOrg === strRev ? true : false;
}

console.log(checkIfPalindrome(s2));
