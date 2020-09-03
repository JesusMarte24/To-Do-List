let containerList = document.querySelector(".container--list");
let button = document.querySelector(".container--bottom--button");
let html = `<li class="list--items id="">
  <i>things<i>
  <div class="item--modal">
     <a class="item--modal--a1">Mark as completed?</a>
     <a class="item--modal--a2">Delete?</a>
  </div>
  </li>`;
let inputValue = document.querySelector(".container--bottom--value");
let elementList;
let List = [];
let ID;
let modalItem;
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayNumber = new Date().getDay();
let toDay = daysOfWeek[dayNumber];
let day = (document.querySelector(".date").textContent = toDay);

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

button.addEventListener("click", addItem);
inputValue.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    addItem();
  }
});
