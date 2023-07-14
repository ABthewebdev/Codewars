// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia). Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
  var isAnagram = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return t==o;
};