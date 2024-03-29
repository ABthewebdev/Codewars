// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
function countSheep(num) {
    let string = '';
    for(let i = 1; i <= num; i++) {
        string += `${i} sheep...`;
    }
    return string;
}

countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``