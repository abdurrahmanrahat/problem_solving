// Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order.

const students = [
  {
    name: "Alice",
    grades: [85, 92, 88, 96],
  },
  {
    name: "Bob",
    grades: [79, 82, 91, 89],
  },
  {
    name: "Charlie",
    grades: [92, 90, 85, 87],
  },
];

const sortByResultAverage = () => {
  const makeAverage = (numbers) => {
    const totalMark = numbers.reduce((sum, num) => sum + num, 0);

    const average = totalMark / numbers.length;
    return average;
  };

  const sortStudents = students.sort(
    (a, b) => makeAverage(b.grades) - makeAverage(a.grades)
  );
  console.log(sortStudents);
};

sortByResultAverage();
