// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// My solution
const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(string) {
	var word = '';
  for (var i = 0; i < string.length; i++){
  	word = word + string[i] + string[i];
  };
  return word;
};