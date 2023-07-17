"use strict";
let menuBtn = document.querySelector("#menu-btn");
let item = document.querySelector(".item");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menuBtn.classList.toggle("fa-times");
  item.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav_link");

const changeActiveItem = () => {
  navLink.forEach((item) => {
    item.classList.remove("active");
  });
};

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
  });
});

const icon = document.querySelectorAll(".icon");

const changeIcon = function () {
  icon.forEach((term) => {
    term.classList.remove("active");
  });
};

icon.forEach((term) => {
  term.addEventListener("click", function () {
    changeIcon();
    term.classList.add("active");
  });
});

const hidden = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const descriptionBox = document.querySelector(".description-box");
const mainSectionProduct = document.querySelectorAll(".main-section-product");
const product = document.querySelectorAll(".product");

const open = function () {
  overlay.classList.remove("hidden");
  descriptionBox.classList.remove("hidden");
};

for (let i = 0; i < mainSectionProduct.length; i++) {
  mainSectionProduct[i].addEventListener("click", open);
}

for (let i = 0; i < product.length; i++) {
  product[i].addEventListener("click", open);
}

const close = function () {
  overlay.classList.add("hidden");
  descriptionBox.classList.add("hidden");
};

closeBtn.addEventListener("click", close);
overlay.addEventListener("click", close);
