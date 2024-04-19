function percentageOfWorld1(population) {
  // The returned number is rounded to 2 digits in the decimal part.
  return ((population / 7900000000) * 100).toFixed(2);
}

function describePopulation(country, population) {
  return `${country} has ${
    population / 1000000
  } million people, which is about ${percentageOfWorld1(
    population
  )}% of the world`;
}
