//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
function basicOps(operation, value1, value2) {
    switch (operation) {
        case('+'):
            return value1 + value2;
        case('-'):
            return value1 - value2;
        case('*'):
            return value1 * value2;
        case('/'):
            return value1 / value2;
        default:
            return 0;
    }
}