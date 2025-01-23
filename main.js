//! task-1 hw 19
// function getNumber(firstName, lastName, age, university, faculty, gpa) {
//   return {
//     fullName: firstName + lastName,
//     age: age,
//     education: {
//       university: university,
//       faculty: faculty,
//       gpa: gpa,
//     },
//   };
// }
// getNumber("Kubat", "Beishenov", 24, "ALATOO", "CS", 87);
//? task-2
// let userName = {
//   firstName: "Kubat",
//   age: 17,
//   university: "ALATOO",
//   faculty: "CS",
//   gpa: 87,
// };
// function deleteKey(objact, key) {
//   if (key in objact) {
//     delete objact[key];
//     return objact;
//   } else {
//     console.log(`Ключ ${key} отсутствует в объекте`);
//   }
// }
// console.log(deleteKey(userName, "gpa"));
//! task-3
// let user = {
//   name: "Kubat",
//   age: 17,
//   email: "Kubatb990@gmail.com",
//   password: "12345",
// };
// let sum5 = 5;
// let userEmail = prompt("Введите эмайл");
// if (userEmail !== user.email) {
//   alert("Введите правельно!");
// } else {
//   let userPass = prompt("Введите пароль");
//   if (userPass !== user.password) {
//     alert("Введите правельно!");
//   } else {
//     let Sum1 = +prompt("2+3=?");
//     if (Sum1 === sum5) {
//       user.sum = sum5;
//       alert(`Верно! Ваша премия = ${user.sum}`);
//     } else {
//       alert("Неправильный ответ");
//     }
//   }
// }
// console.log(user);