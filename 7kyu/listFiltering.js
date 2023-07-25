// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// My solution
function filter_list(l) {
    return l.filter(l => String(l) !== l)
}

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }