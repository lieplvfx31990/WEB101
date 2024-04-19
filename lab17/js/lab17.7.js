// The function that computes the average value of elements in an array
const calcAverage = (myArr) => {
  if (myArr instanceof Array) {
    let retv = 0; // The variable holds the returned value
    let aLen = myArr.length; // The length of the array myArr
    for (let i = 0; i < aLen; i++) {
      retv += myArr[i];
    }
    retv /= aLen;
    return retv;
  } else {
    return typeof myArr == "number" ? myArr : NaN;
  }
};

// The function that specifies the winner
function checkWinner(avgDolphins, avgKoalas) {
  let retStr; // The variable that holds the returned value
  if (avgDolphins >= 2 * avgKoalas) {
    retStr = `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    retStr = `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else retStr = `no winner`;
  return retStr;
}

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
const total = (bills) => {
  let totalvals;
  if (bills instanceof Array) {
    totalvals = [];
    for (let i = 0; i < bills.length; i++)
      totalvals[i] = bills[i] + calcTip(bills[i]);
  }
  return totalvals;
};
