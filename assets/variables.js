export { containerList, button, html, inputValue };

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
let containerList = document.querySelector(".container--list");
let button = document.querySelector(".container--bottom--button");
let html = `<li class="list--items id="">
    <i>things<i>
    <div class="item--modal">
       <button class="item--modal--a1">Mark as completed?</button>
       <button class="item--modal--a2">Delete?</button>
    </div>
    </li>`;
let inputValue = document.querySelector(".container--bottom--value");
