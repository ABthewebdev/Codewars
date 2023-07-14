// You are renting a car for vacation, every day you rent costs 40 bucks, but you get 20 bucks off if you rent 3 or more days. And get 50 bucks off for 7 days or more

function days(d) {
  return d * 40 - (d <= 3 ? 20 : d <= 7 ? 40 : 0)
}