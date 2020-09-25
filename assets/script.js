import { button, inputValue } from "./variables.js";

import { addItem } from "./functions.js";

button.addEventListener("click", addItem);
inputValue.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    addItem();
  }
});
