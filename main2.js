async function getCards() {
    try {
      let response = await fetch(`https://dummyjson.com/carts`);
      let data = await response.json();
      renderCards(data);
    } catch (error) {
      console.log(new Error(error));
    }
  }
  getCards();
  
  const renderCards = (object) => {
    if (object.length === 0) {
      const pInfo = document.createElement("p");
      pInfo.textContent = "Здесь пока ничего нету!!!";
      pInfo.style.color = "red";
      pInfo.style.fontSize = "25px";
      document.body.appendChild(pInfo);
    } else {
      object.carts[0].products.map((item) => {
        const div = document.createElement("div");
        const imgTag = document.createElement("img");
        const pTag = document.createElement("p");
        const deleteMod = document.createElement("img");
        deleteMod.src = "https://cdn-icons-png.flaticon.com/512/60/60969.png";
        deleteMod.className = "modul";
        div.className = "div1";
        imgTag.src = item.thumbnail;
        imgTag.className = "imgTag";
        pTag.textContent = item.title;
        pTag.className = "pTag";
        deleteMod.addEventListener("click", () => {
          const divMod = document.getElementById("modal");
          const buttonConfirm = document.getElementById("confirm");
          const buttonCancel = document.getElementById("cancel");
          divMod.style.display = "block";
          buttonConfirm.addEventListener("click", () => {
            document.body.removeChild(div);
            divMod.style.display = "none";
          });
          buttonCancel.addEventListener("click", () => {
            divMod.style.display = "none";
          });
          divMod.append(buttonConfirm, buttonCancel);
          body.appendChild(divMod);
        });
        div.append(imgTag, pTag, deleteMod);
        document.body.appendChild(div);
      });
    }
  };
  