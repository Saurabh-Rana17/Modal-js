"use strict";
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelector(".close-modal");
let btnsOpenModal = document.querySelectorAll(".show-modal");
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", () => {
    btnsOpenModal[i].textContent = "new value";
  });
}
