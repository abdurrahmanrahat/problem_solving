// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

const numbers = [4, 5, 2, 76, 44, 5, 4, 2];

const removeDuplicateFromArray = () => {
  let uniqueNumbers = [];
  for (let num of numbers) {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  }
  console.log(uniqueNumbers);
};

removeDuplicateFromArray();
