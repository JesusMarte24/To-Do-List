import { containerList, html, inputValue } from "./variables.js";

export { addItem };

let elementList;
let List = [];
let ID;
let modalItem;

function addItem() {
  if (inputValue.value !== "" && inputValue.value !== " ") {
    elementList = html.replace("things", inputValue.value);
    containerList.insertAdjacentHTML("beforeend", elementList);
    countElements();
    inputValue.value = "";
  }
}

function countElements() {
  ID = document.querySelectorAll(".list--items");
  modalItem = document.querySelectorAll(".item--modal");

  for (let i = 0; i < ID.length; i++) {
    ID[i].addEventListener("mouseover", () => {
      mouseOver();
    });

    ID[i].addEventListener("mouseout", () => {
      mouseOut();
    });

    function mouseOver() {
      modalItem[i].style.display = "flex";
    }

    function mouseOut() {
      modalItem[i].style.display = "none";
    }

    List.push({
      name: inputValue.value,
      ID: i,
    });
  }
}
