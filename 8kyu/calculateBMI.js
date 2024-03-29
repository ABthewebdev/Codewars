// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"
// My solution
function bmi(weight, height) {
    let mass = weight / Math.pow(height, 2)
    if(mass <= 18.5) {
      return 'Underweight';
    }
    else if(mass <= 25.0) {
      return 'Normal';
    }
    else if(mass <= 30.0) {
      return 'Overweight';
    }
    else {
      return 'Obese';
    }
}

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";