// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2020,
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2018,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2021,
  },
];

const sortTheCarsWithYear = () => {
  const newData = cars.sort((x, y) => x.year - y.year);
  console.log(newData);
};

sortTheCarsWithYear()