let RemoveSpaces = "               David Paule Fred Eli ";
console.log(RemoveSpaces);
console.log(RemoveSpaces.trim());

function IsDivi(async) {
  return async % 10 === 0 ? true : false;
}

console.log(IsDivi(90));

function vowelCount(str) {
  var vowels = "aeiouAEIOU";
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      count++;
    }
  }
  return count;
}

console.log(vowelCount("test the amount of vowels in this string"));
