// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const peoples = [
  {
    name: "Alice",
    age: 30,
    gender: "female",
  },
  {
    name: "Bob",
    age: 25,
    gender: "male",
  },
  {
    name: "Carol",
    age: 27,
    gender: "female",
  },
  {
    name: "David",
    age: 35,
    gender: "male",
  },
  {
    name: "Eve",
    age: 22,
    gender: "female",
  },
];

const filterOutFemalesAndMap = () => {
  const remaining = peoples.filter((people) => people.gender !== "female");
  const names = remaining.map((each) => each.name);
  console.log(names);
};

filterOutFemalesAndMap();
