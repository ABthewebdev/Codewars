// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// My solution
function century(year) {
    return Math.ceil(year / 100);
}

const century = year => Math.ceil(year/100)