"use strict";
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelector(".close-modal");
let btnsOpenModal = document.querySelectorAll(".show-modal");
let closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
