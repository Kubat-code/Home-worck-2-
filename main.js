// !task-1
// const user = {
//   id: 1,
//   first_name: "Garrott",
//   last_name: "Eberdt",
//   email: "geberdt0@wp.com",
//   gender: "Male",
//   ip_address: "49.230.15.110",
//   isAdmin: true,
// };
// const { id, name1, name2, poshta, pol, ip_address, admin } = user;
// console.log(user);
// !task-2
// const animals = ["apple", "banana", "lemon", "kiwi", true];
// const [iphone, fruct, fruct2, fruct3, fals] = animals;
// console.log(fruct);
// !task-3
// const workers = [
//   {
//     id: 1,
//     name: "Emile",
//     lastname: "Van Weedenburg",
//     email: "evanweedenburg0@technorati.com",
//   },
//   {
//     id: 2,
//     name: "Orv",
//     lastname: "Gretton",
//     email: "ogretton1@about.me",
//   },
// ];
// const [{ ...rest }, { ...rest2 }] = workers;
// console.log(rest, rest2);
// !task-4
// const product = {
//   id: 1,
//   details: {
//     title: "Phone",
//     price: 300,
//   },
// };
// const { details: tp } = product;
// console.log(tp);
// !task-5
// const posts = {
//   name: "posts",
//   isLoading: true,
//   byId: {
//     post1: {
//       id: "post1",
//       author: "user1",
//       body: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post2: {
//       id: "post2",
//       author: "user2",
//       body: "......",
//       comments: ["comment3", "comment4"],
//     },
//   },
//   allIds: ["post1", "post2"],
// };
// const copyOfPosts = { ...posts };
// console.log(copyOfPosts);
// !task-6
// const posts = {
//   name: "posts",
//   isLoading: true,
//   byId: {
//     post1: {
//       id: "post1",
//       author: "user1",
//       body: "......",
//       comments: ["comment1", "comment2"],
//     },
//     post2: {
//       id: "post2",
//       author: "user2",
//       body: "......",
//       comments: ["comment3", "comment4"],
//     },
//   },
//   allIds: ["post1", "post2"],
// };
// const array = {...posts}
// const arr = JSON.parse(JSON.stringify(array))
// console.log(arr);
// !task-7
// color - ["comment1", "comment2"]
// hellow - name
// ...rest - остатольное
// !task-8
// undefined - undefined(бир тамга же цифра кошсок, то  "comment3")
// Comment1 = Comment3
// ...rest - остальное