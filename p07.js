// leap year

const isItLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("leap year");
  } else {
    console.log("not leap");
  }
};

isItLeapYear(2024)