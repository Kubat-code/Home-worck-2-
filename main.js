//! TASK-1
// const number = [1, 2, 3, 4, 5];
// console.log(number.map((item) => item ** 2));
//! TASK-2
// let users = [
//   { firstName: "Josh", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
// ];
// const newUser = users.map((item) => {
//   return {
//     fullName: item.firstName + " " + item.lastName,
//     age: item.age,
//     gender: item.gender,
//   };
// });
// console.log(newUser);
//! TASK-3
// const number = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
// console.log(number.filter((item) => item % 2 === 0));
//! TASK-4
// let users = [
//   { firstName: "Josh", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Boa", lastName: "Hencock", age: 31, gender: "female" },
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
//   { firstName: "Robin", lastName: "Nica", age: 38, gender: "female" },
// ];
// console.log(users.filter((item)=> item.gender === "female"));
//! TASK-5
// const numbers = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
// let sum = 0;
// numbers.forEach(function (number) {
//   if (number % 2 !== 0) {
//     sum += number;
//   }
// });
// console.log(sum);
//! TASK-6
// let users = [
//   { firstName: "Josh", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Boa", lastName: "Hencock", age: 31, gender: "female" },
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
//   { firstName: "Robin", lastName: "Nica", age: 38, gender: "female" },
// ];
// console.log(users.find((item) => item.firstName === "Naruto"));
//! TASK-7
// const number = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
// console.log(number.findIndex((item) => item === 34));
//! TASK-8
// let users = [
//   {
//     firstName: "Josh",
//     lastName: "Obama",
//     age: 34,
//     gender: "male",
//     id: "-Nsado10",
//   },
//   {
//     firstName: "Ariana",
//     lastName: "Grande",
//     age: 22,
//     gender: "female",
//     id: "-Nsdoq1",
//   },
//   {
//     firstName: "Naruto",
//     lastName: "Uzumaki",
//     age: 19,
//     gender: "male",
//     id: "-Nsiad0q",
//   },
//   {
//     firstName: "Cristiano",
//     lastName: "Ronaldo",
//     age: 38,
//     gender: "male",
//     id: "-Nsoad0q",
//   },
// ];
// const getId = users.reduce((acc, item) => {
//   acc[item.id] = item;
//   delete item.id;
//   return acc;
// }, {});
// console.log(getId);