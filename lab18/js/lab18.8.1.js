// Define an object named 'markInfo' that contains Mark's information including his full name, mass and height:
const markInfo = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  // Define a method that computes BMI based on mass and height.
  // Simultaneously, create a property named bmi holding BMI value
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// Define an object named 'johnInfo' that contains John's information including his full name, mass and height:
const johnInfo = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  // Define a method that computes BMI based on mass and height.
  // Simultaneously, create a property named bmi holding BMI value
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
