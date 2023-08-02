let btn = document.querySelector("button");
let adviceId = document.querySelector(".advice-id");
let advice = document.querySelector(".advice");

const baseUrl = "https://api.adviceslip.com/advice";

function showLoader() {
   adviceId.innerText = "";
   advice.innerText = "";
   adviceId.classList.add("is-loading");
   advice.classList.add("is-loading");
}

function hideLoader() {
   adviceId.classList.remove("is-loading");
   advice.classList.remove("is-loading");
}

function getData() {
   showLoader();
   fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
         console.log(data.slip.advice);
         adviceId.innerText = `ADVICE #${data.slip.id}`;
         advice.innerText = data.slip.advice;
         hideLoader();
      })
      .catch((err) => console.log(err));
}

btn.addEventListener("click", getData);

document.addEventListener("DOMContentLoaded", getData);
