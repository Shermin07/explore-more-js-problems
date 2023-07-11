const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const friends = [12, 23, 34,45,56,67,78];
const student = { name:"shermin", id:12007, class:13};
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// array//
console.log(Array.isArray(friends));
// is there any element of an array//
console.log(friends.includes(44));
// concat//
const students = [22, 44,66,88,100,];
const newStudents = [11, 33, 55,77,99];
const allStudents= newStudents.concat(students);
console.log(allStudents);