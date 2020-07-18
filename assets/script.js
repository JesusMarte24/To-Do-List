{
  let list = document.querySelectorAll(".list--items");
  let modalItem = document.querySelectorAll(".item--modal");
  let containerList = document.querySelector(".container--list");
  let button = document.querySelector(".container--bottom--button");
  let html = `<li class="list--items">
  <a>things<a>
  <div class="item--modal">Mark as completed?</div>
  </li>`;
  let inputValue = document.querySelector(".container--bottom--value");

  button.addEventListener("click", () => {
    let elementList;
    elementList = html.replace("things", inputValue.value);
    containerList.insertAdjacentHTML("beforeend", elementList);
    countElements();
  });

  function countElements() {
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("mouseover", () => {
        mouseOver();
      });

      list[i].addEventListener("mouseout", () => {
        mouseOut();
      });

      function mouseOver() {
        modalItem[i].style.display = "flex";
      }

      function mouseOut() {
        modalItem[i].style.display = "none";
      }
    }
  }
}
