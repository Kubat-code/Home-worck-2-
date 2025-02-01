//! task-1
// let computers = [
//   { title: "Macbook air M1", price: 85000 },
//   { title: "Dell", price: 65000 },
//   { title: "Asus ZenBook", price: 40000 },
//   { title: "Acer Aspire", price: 45000 },
//   { title: "Macbook Pro", price: 100000 },
// ];
//? ascending
// computers.sort((a, b) => a.price - b.price)
// console.log(computers);
//? descending
// computers.sort((a, b) => b.price - a.price)
// console.log(computers);
//! task-2
// const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];
//? ascending
// console.log(grades.sort((a, b) => a - b))
//? desceding
// console.log(grades.sort((a, b) => b - a))
//! task-3
// const fruits = ["strawbery", "mango", "watermelon", "grapes", "lemon", "kiwi"];
// console.log(
//   fruits.sort((a, b) => {
//     const fruitsA = a.toUpperCase();
//     const fruitsB = b.toUpperCase();
//     if (fruitsA < fruitsB) {
//       return -1;
//     }
//     if (fruitsA > fruitsB) {
//       return 1;
//     }
//     return 0;
//   })
// );
//! task-4
// const grades = [4, 123, -5, 6, 100];
//? Min
// console.log(Math.min(...grades));
//? Max
// console.log(Math.max(...grades));
//! task-5
//? Date
// function formatDate2(date) {
//   let dd = date.getDate();
//   let mm = date.getMonth() + 1;
//   let yy = date.getFullYear();
//   if (dd < 10) dd = "0" + dd;
//   if (mm < 10) mm = "0" + mm;
//   return `${dd}.${mm}.${yy}`;
// }
// let result = formatDate2(new Date("2022-12-01"));
// console.log(result);
//? Time
// function formatTime(date) {
//   let hh = date.getHours();
//   let min = date.getMinutes()
//   return `Саат-${hh}. Минута-${min}`;
// }
// let result2 = formatTime(new Date());
// console.log(result2);
//! task-6
// ?Key
// let user = {
//   userName: "Uzumaki",
//   email: "email@gmail.com",
//   password: "123123",
//   avatarUrl: "https://github.com/",
//   followers: "1m",
//   following: 52,
//   title: "Never give up",
// };
// for (let key in user) {
//   console.log(key);
// }
// ?Values
// let user2 = {
//   userName: "Uzumaki",
//   email: "email@gmail.com",
//   password: "123123",
//   avatarUrl: "https://github.com/",
//   followers: "1m",
//   following: 52,
//   title: "Never give up",
// };
// for (let val in user2) {
//   console.log(user2[val]);
// }
//! task-7
// let computers = [
//   { title: "Macbook air M1", price: 85000 },
//   { title: "Dell", price: 65000 },
//   { title: "Asus ZenBook", price: 40000 },
//   { title: "Acer Aspire", price: 45000 },
//   { title: "Macbook Pro", price: 100000 },
// ];
// let sum = 0;
// for (let sumPrice of computers) {
//   sum += sumPrice.price
// }
// console.log(sum);