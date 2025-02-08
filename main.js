let array = [];
const body = document.querySelector("body");
const div = document.getElementById("div1");
const div2 = document.getElementById("div2");
const button = document.getElementById("button1");
const input = document.getElementById("text");
const ul = document.getElementById("ul1");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = input.value.trim();
  if (!inputValue) {
    alert("Введите текст");
  } else {
    const newTodo = {
      id: Date.now().toString(),
      title: inputValue,
    };
    array.push(newTodo);
    input.value = "";
    renderTodo(array);
  }
});
function renderTodo(data) {
  ul.innerHTML = "";
  return data.map((item) => {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteTodo(item.id));
    li.textContent = item.title;
    li.style.color = "white";
    li.style.backgroundColor = "rgb(29, 123, 201)";
    li.style.listStyleType = "none";
    li.style.fontFamily = "sans-serif";
    li.style.width = "500px";
    li.style.height = "50px";
    li.style.display = "flex";
    li.style.justifyContent = "center";
    li.style.alignItems = "center";
    li.style.gap = "350px"
    deleteButton.style.color = "white";
    deleteButton.style.backgroundColor = "rgb(245, 80, 110)";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "25px";
    deleteButton.style.width = "70px";
    deleteButton.style.height = "35px";
    deleteButton.style.fontWeight = "700";
    deleteButton.style.fontSize = "16px";
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
}
function deleteTodo(id) {
  array = array.filter((item) => item.id !== id);
  renderTodo(array);
}
//! body
body.style.backgroundColor = "rgb(46, 162, 188)";
//! div
div.style.width = "720px";
div.style.height = "620px";
div.style.margin = "40px auto";
div.style.backgroundColor = "white";
div.style.borderRadius = "25px";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.flexDirection = "column";
//! input
input.style.width = "300px";
input.style.height = "25px";
input.style.border = "2px solid rgb(11, 11, 186)";
//! button
button.style.color = "white";
button.style.backgroundColor = "rgb(211, 61, 89)";
button.style.border = "none";
button.style.borderRadius = "25px";
button.style.width = "70px";
button.style.height = "35px";
button.style.fontWeight = "700";
button.style.fontSize = "16px";
//! ul
ul.style.width = "500px";
ul.style.display = "flex";
ul.style.flexDirection = "column";
ul.style.gap = "10px";