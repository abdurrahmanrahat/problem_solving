// Write A Function That Counts The Number Of Vowels In A Given String.

const string = "hello brother! how are you?";

const countVowels = () => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let count = 0;

  for (let character of string) {
    // console.log(character);
    if (vowels.includes(character)) {
      count++;
    }
  }

  console.log(count);
};

countVowels();
