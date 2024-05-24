// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 28, gender: "male" },
  { name: "Diana", age: 22, gender: "female" },
];

const searchByNameAndModifyAge = (people, personName, newAge) => {
  const person = people.find((item) => item.name === personName);
  console.log(person);
};

searchByNameAndModifyAge(people, "Bob", 50);
