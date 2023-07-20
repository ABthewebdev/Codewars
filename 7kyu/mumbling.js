// Write a function that creates a string that repeats the letters in this fashion: 
// accum("abcd") -> "A-Bb-Ccc-Dddd" 
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" 
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum(s) {
	return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}