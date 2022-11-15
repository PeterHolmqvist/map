  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5,]
let result = [];
for (let num of nums) {
  result.push(num*2)
}

console.log(result)


// Using map()
const multiplyTwo = function (num) {
  return num * 2
};

const mapResults = nums.map(multiplyTwo)

console.log(mapResults)

// Simplified w/ map()

const simplyfied = nums.map(function (num) {return num *2});
console.log(simplyfied)

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentWithIds = students.map(student => {student.id, student.name});
console.log(studentWithIds)