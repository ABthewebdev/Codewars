// You are renting a car for vacation, every day you rent costs 40 bucks, but you get 20 bucks off if you rent 3 or more days. And get 50 bucks off for 7 days or more

function discountRate(d) {
    if(d >= 7) {
      return 50;
    }
    else if(d >= 3) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCarCost(d) {
    return d * 40 - discountRate(d)
  }