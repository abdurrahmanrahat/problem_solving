// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

const numbers = [6, 78, 45, 34, 9];

const findMaxValue = () => {
  const result = numbers.sort((a, b) => b - a);
  const max = result[0]
  console.log(max);
};

findMaxValue()