function lab15_1() {
  let country = "Vietnam";
  let continent = "Asia";
  let population = 100.3;
  let isIsland = false;
  let language;

  console.log(typeof isIsland);
  console.log(typeof population);
  console.log(typeof country);
  console.log(typeof language);
}

function lab15_2() {
  const country = "Vietnam";
  const continent = "Asia";
  let population = 100.3;
  const isIsland = false;
  const language = "Vietnamese";

  isIsland = false;
}

function lab15_3_1() {
  const country = "Vietnam";
  const continent = "Asia";
  const isIsland = false;
  const language = "Vietnamese";
  let population = 100.3;

  console.log(`population chia 2: ${population / 2}`);
}

function lab15_3_2() {
  const country = "Vietnam";
  const continent = "Asia";
  const isIsland = false;
  const language = "Vietnamese";
  let population = 100.3;

  console.log(`Tăng giá trị population thêm 1: ${++population}`);
}

function lab15_3_3() {
  const country = "Vietnam";
  const continent = "Asia";
  const isIsland = false;
  const language = "Vietnamese";
  let population = 100.3;
  let fin_population = 6;

  console.log(`population lớn hơn 6 triệu: ${population > fin_population}`);
}

function lab15_3_4() {
  const country = "Vietnam";
  const continent = "Asia";
  const isIsland = false;
  const language = "Vietnamese";
  let population = 100.3;
  let average_popula = 33;

  console.log(
    `Quốc gia của bạn có ít dân hơn mức dân số trung bình: ${
      population < average_popula
    }`
  );
}

function lab15_3_5_opt0() {
  let description = {
    country: "Vietnam",
    population: 100.3,
    language: "Vietnamese",
  };
  console.log(
    `country: ${description.country} \n\population: ${description.population} \n\language: ${description.language}`
  );
}

function lab15_3_5() {
  const country = "Vietnam";
  const continent = "Asia";
  const isIsland = false;
  const language = "Vietnamese";
  let population = 100.3;
  let description =
    country + " and its " + population + " million people speak " + language;
  console.log(description);
}

function lab15_4() {
  const country = "Vietnam";
  const continent = "Asia";
  const isIslad = false;
  const language = "Vietnamese";
  let population = 100.3;
  let description = `${country} and its ${population} million people speak ${language}`;
  console.log(description);
}

function lab15_5() {
  const country = "Vietnam";
  const continent = "Asia";
  const isIsland = false;
  const language = "Vietnamese";
  let population = 100.3;
  let average_popula = 33;

  if (population > average_popula) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(
      `${country}'s population is ${33 - population} million below average`
    );
  }
}

function lab15_6_1() {
  let markHeight; // Mark's height
  let markMass; // Mark's mass
  let johnHeight; // John's height
  let johnMass; // John's mass

  let markBMI; // Mark's body mass index
  let johnBMI; // John's body mass index
  let markHigherBMI; // Mark's BMI higher John's BMI or not

  markMass = 78;
  markHeight = 1.69;
  johnMass = 92;
  johnHeight = 1.96;
  markBMI = markMass / markHeight ** 2;
  johnBMI = johnMass / johnHeight ** 2;
  markHigherBMI = markBMI > johnBMI;
  console.log("DỮ LIỆU 1:");
  console.log(`Mark's mass: ${markMass}`);
  console.log(`Mark's height: ${markHeight}`);
  console.log(`Mark's BMI: ${markBMI}`);
  console.log(`John's mass: ${johnMass}`);
  console.log(`John's height: ${johnHeight}`);
  console.log(`John's BMI: ${johnBMI}`);
  console.log(`markHigherBMI: ${markHigherBMI}`);
  console.log("--------------------------------");

  markMass = 95;
  markHeight = 1.88;
  johnMass = 85;
  johnHeight = 1.76;
  markBMI = markMass / (markHeight * markHeight);
  johnBMI = johnMass / (johnHeight * johnHeight);
  markHigherBMI = markBMI > johnBMI;
  console.log("DỮ LIỆU 2:");
  console.log(`Mark's mass: ${markMass}`);
  console.log(`Mark's height: ${markHeight}`);
  console.log(`Mark's BMI: ${markBMI}`);
  console.log(`John's mass: ${johnMass}`);
  console.log(`John's height: ${johnHeight}`);
  console.log(`John's BMI: ${johnBMI}`);
  console.log(`markHigherBMI: ${markHigherBMI}`);
}

function lab15_6_2() {
  let markHeight; // Mark's height
  let markMass; // Mark's mass
  let johnHeight; // John's height
  let johnMass; // John's mass

  let markBMI; // Mark's body mass index
  let johnBMI; // John's body mass index
  let markHigherBMI; // Mark's BMI higher John's BMI or not
  markMass = 78;
  markHeight = 1.69;
  johnMass = 92;
  johnHeight = 1.96;
  markBMI = markMass / markHeight ** 2;
  johnBMI = johnMass / johnHeight ** 2;
  markHigherBMI = markBMI > johnBMI;
  console.log("NHIỆM VỤ 1:");
  if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
  } else {
    console.log("John's BMI is higher than Marks's!");
  }
  console.log("------------------------------------");
  console.log("NHIỆM VỤ 2:");
  if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
  } else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
  }
}
