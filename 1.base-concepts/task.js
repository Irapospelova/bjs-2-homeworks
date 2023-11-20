"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  const monthlyInterestRate = percent / 100 / 12;

  if (
    typeof monthlyInterestRate !== "number" &&
    typeof contribution !== "number" &&
    typeof amount !== "number" &&
    typeof countMonths !== "number"
  ) {
    return false;
  }

  const creditBody = amount - contribution;

  const monthlyPayment =
    creditBody *
    (monthlyInterestRate +
      monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));

  const totalPayment = monthlyPayment * countMonths;

  const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

  return roundedTotalPayment;

};
