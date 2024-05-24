// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

const numbers = [6, 78, 45, 34, 9];

const findMaxValue = () => {
  //   const result = numbers.sort((a, b) => b - a);
  //   const max = result[0]
  //   console.log(max);
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log(max);
};

findMaxValue();
