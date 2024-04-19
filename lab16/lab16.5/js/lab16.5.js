// The function that returns a message about comparison of population
// parameter n : holds the name of nation
// parameter p : holds the value (in million) of population of considered nation
function aboutPopulation(n, p) {
  const ap = 33; // The variable that holds the average population (in million) of the World (in million)
  let retval; // The variable that holds the returned value
  if (typeof n == "string" && typeof p == "number") {
    retval = `${n}'s population is ${p > ap ? "above" : "below"} average`;
  }
  return retval;
}
