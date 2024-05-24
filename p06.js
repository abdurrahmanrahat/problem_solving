// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const numbers = [8, 4, 6, 4];

const makeTotal = () => {
  const result = numbers.reduce((total, num) => {
    // console.log("total", total);
    // console.log("num", num);
    return total + num;
  }, 0);
  console.log(result);
};

makeTotal();
