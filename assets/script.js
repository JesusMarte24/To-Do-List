{
  let list = document.querySelectorAll(".list--items");
  let modalItem = document.querySelectorAll(".item--modal");

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
