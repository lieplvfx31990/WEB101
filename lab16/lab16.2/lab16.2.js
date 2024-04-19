// The function that performs step 1 to step 5 of lab16.2
// This function returns the message about the number of your country's border
function step1to5() {
  let retval; // Holds the returned value
  let numNeighbours = prompt(
    "How many neighbor countries does your country have?",
    "8"
  );
  if (numNeighbours == 1) retval = "Only 1 border!";
  else if (numNeighbours > 1) retval = "More than 1 border!";
  else retval = "No borders";
  return retval;
}

// The function that performs step 6 of lab16.2
// This function returns the message that will be print out to the console
function step6() {
  let retval; // Holds the returned value
  let numNeighbours = prompt(
    "How many neighbor countries does your country have?",
    "8"
  );
  if (numNeighbours === 1) retval = "Only 1 border!";
  else if (numNeighbours > 1) retval = "More than 1 border!";
  else retval = "No borders";
  return retval;
}

// The function that performs step 7 of lab16.2
// This function returns the message that will be print out to the console
function step7() {
  let retval; // Holds the returned value
  let numNeighbours = Number(
    prompt("How many neighbor countries does your country have?", "8")
  );
  if (numNeighbours === 1) retval = "Only 1 border!";
  else if (numNeighbours > 1) retval = "More than 1 border!";
  else retval = "No borders";
  return retval;
}
