// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// My solution
function solution(str, ending){
    return str.slice(str.length - ending.length, str.length) === ending
}

function solution(str, ending){
    return str.endsWith(ending);
}