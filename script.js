"use strict";
const progressBar = document.querySelector(".progress-bar");
const price = document.querySelectorAll(".price");
const pageViewsNum = document.querySelector(".page-views-num");
const input = document.querySelector(".input");
const monthlyBill = document.querySelector(".monthly-bill");
const yearlyBill = document.querySelector(".yearly-bill");

// progress funciton
function checkProgress() {
  if (input.checked) {
    yearlyPageCost();
    yearlyBill.style.color = "hsl(227, 35%, 25%)";
    monthlyBill.style.color = " hsl(225, 20%, 60%)";
  } else {
    monthlyPagesCost();
    yearlyBill.style.color = " hsl(225, 20%, 60%)";
    monthlyBill.style.color = "hsl(227, 35%, 25%)";
  }
}

//  monthly cost of pages
function monthlyPagesCost() {
  if (progressBar.value == 1) {
    price.forEach((e) => (e.textContent = "8.00"));
    pageViewsNum.textContent = "10K";
  } else if (progressBar.value == 2) {
    price.forEach((e) => (e.textContent = "14.00"));
    pageViewsNum.textContent = "50K";
  } else if (progressBar.value == 3) {
    price.forEach((e) => (e.textContent = "16.00"));
    pageViewsNum.textContent = "100K";
  } else if (progressBar.value == 4) {
    price.forEach((e) => (e.textContent = "26.00"));
    pageViewsNum.textContent = "500K";
  } else if (progressBar.value == 5) {
    price.forEach((e) => (e.textContent = "30.00"));
    pageViewsNum.textContent = "1M";
  }
}
// yearly pages costs
function yearlyPageCost() {
  if (progressBar.value == 1) {
    const discoutnPrice = 8 * (75 / 100);
    price.forEach((e) => (e.textContent = discoutnPrice.toFixed(2)));
    pageViewsNum.textContent = "10K";
  } else if (progressBar.value == 2) {
    const discoutnPrice = 14 * (75 / 100);
    price.forEach((e) => (e.textContent = discoutnPrice.toFixed(2)));
    pageViewsNum.textContent = "50K";
  } else if (progressBar.value == 3) {
    const discoutnPrice = 16 * (75 / 100);
    price.forEach((e) => (e.textContent = discoutnPrice.toFixed(2)));
    pageViewsNum.textContent = "100K";
  } else if (progressBar.value == 4) {
    const discoutnPrice = 26 * (75 / 100);
    price.forEach((e) => (e.textContent = discoutnPrice.toFixed(2)));
    pageViewsNum.textContent = "500K";
  } else if (progressBar.value == 5) {
    const discoutnPrice = 30 * (75 / 100);
    price.forEach((e) => (e.textContent = discoutnPrice.toFixed(2)));
    pageViewsNum.textContent = "1M";
  }
}

progressBar.addEventListener("input", checkProgress);

input.addEventListener("click", checkProgress);
