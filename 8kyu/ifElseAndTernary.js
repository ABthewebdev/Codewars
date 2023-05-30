// Write a function that multiplies the number of hotdogs by the specified price
// If n < 5, price for one hotdog is 100 cents
// If n >= 5 and n < 10, price for one hotdog is 95 cents
// If n >= 10, price for one hotdog is 90 cents
function saleHotdogs(n){
    return n*(n<5?100:n<10?95:90);
}

const saleHotdogs = (n) => {
    switch (true) {
      case n < 5: return n * 100;
      case n < 10: return n * 95;
      default: return n * 90;
    }
}