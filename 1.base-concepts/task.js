"use strict";

function solveEquation(a, b, c) {
 let arr = [];
 let d;  
  d = Math.pow(b,2)-4*a*c;
  if (d === 0) {
    arr.push(-b/(2*a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a),(-b - Math.sqrt(d) )/(2*a));
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let bodyCredit;
  let countMunth;
  let payment;
  let now = new Date();

  if ( isNaN(Number(percent)) === true ) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else percent = Number(percent);
  if ( isNaN(Number(contribution)) === true ) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }  else contribution = Number(contribution);
  if ( isNaN(Number(amount)) === true) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else amount = Number(amount);

  countMunth = date.getMonth() - now.getMonth() + (12 * (date.getFullYear() - now.getFullYear()));
  bodyCredit = amount-contribution;
  percent = (percent/100)/12; 
  payment = bodyCredit * (percent + (percent / ((Math.pow((1 + percent),countMunth)) - 1)));
  totalAmount = (payment*countMunth).toFixed(2);
  return Number(totalAmount);
}
