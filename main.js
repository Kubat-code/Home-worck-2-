const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");
const modalTag = document.getElementById("modal");
modalTag.style.display = "none";
const confirmTag = document.getElementById("confirm");
const cancelTag = document.getElementById("cancel");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  if (!inputValue) {
    alert("Введите текст");
  } else {
    // !delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.width = "70px";
    deleteBtn.style.height = "30px";
    deleteBtn.style.borderRadius = "25px";
    deleteBtn.style.backgroundColor = "rgb(190, 46, 46)";
    deleteBtn.style.border = "none";
    deleteBtn.style.color = "white";
    deleteBtn.addEventListener("click", () => {
      modalTag.style.display = "block";
      //!Confirm
      confirmTag.addEventListener("click", () => {
        modalTag.style.display = "none";
        div.removeChild(pTag);
      });
      // !  cancelTag
      cancelTag.addEventListener("click", () => {
        modalTag.style.display = "none";
      });
    });
    //! checkBox
    const checkBox = document.createElement("input");
    checkBox.addEventListener("click", () => {
      if (checkBox.checked) {
        pTag.style.textDecorationLine = "line-through";
        pTag.style.textDecorationColor = 'red'
      } else {
        pTag.style.textDecorationLine = "none";
        }
    });
    checkBox.type = "checkbox";
    checkBox.style.position = "fixed";
    checkBox.style.left = "850px";
    checkBox.style.width = '25px'
    checkBox.style.height = '25px'
    //! pTag
    const pTag = document.createElement("p");
    pTag.textContent = inputValue;
    pTag.style.backgroundColor = "rgb(39, 34, 149)";
    pTag.style.width = "400px";
    pTag.style.display = "flex";
    pTag.style.alignItems = "center";
    pTag.style.justifyContent = "space-between";
    pTag.style.padding = "10px";
    pTag.style.borderRadius = "20px";
    input.value = "";
    pTag.append(checkBox, deleteBtn);
    div.append(pTag, modalTag);
  }
});
