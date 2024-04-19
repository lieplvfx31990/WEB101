// The function that calculates tip from input bill value
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// The function that calculates array of tips from array of input bill value
const tips = (bills) => {
  let tipvals;
  if (bills instanceof Array) {
    tipvals = [];
    for (let i = 0; i < bills.length; i++) tipvals[i] = calcTip(bills[i]);
  }
  return tipvals;
};

// The function that calculates array of tips from array of input bill value
const totals = (bills) => {
  let totalvals;
  if (bills instanceof Array) {
    totalvals = [];
    for (let i = 0; i < bills.length; i++)
      totalvals[i] = bills[i] + calcTip(bills[i]);
  }
  return totalvals;
};

// The function calculates the average value of all elements of an input array (arr).
// This also considers the case of input parameter arr is a number or a string of decimal digits.
// All other cases of arr, the function returns NaN (Not a Number)
const calcAverage = function (arr) {
  let retval = 0;
  if (arr instanceof Array) {
    for (let i = 0; i < arr.length; i++) retval += arr[i];
    retval /= arr.length;
  } else retval = Number(arr);
  return retval;
};
