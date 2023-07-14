// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// My solution
function boolToString(bool) {
    if(bool === true) {
        return 'Yes';
    } else if(bool === false) {
        return 'No';
    }
}

function boolToString( bool ){
    return bool ? 'Yes':'No';
}