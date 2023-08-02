const adviceIdSpan = document.querySelector(".advice-id");
const quoteDiv = document.querySelector(".quote");
const ctaBtn = document.querySelector(".cta");
const dualRing = document.querySelector(".lds-dual-ring");
const title = document.querySelector(".title");
let isDisabled = false;

document.addEventListener(
   "DOMContentLoaded",
   async () => {
      await fetchAdvice();
   },
   false
);

ctaBtn.addEventListener("click", async () => {
   if (isDisabled) return;
   adviceIdSpan.innerHTML = "";
   quoteDiv.innerHTML = "";
   await fetchAdvice();
});

const fetchAdvice = async () => {
   title.style.marginBottom = "6rem";
   dualRing.classList.remove("disabled");
   ctaBtn.classList.add("disabled");
   isDisabled = true;
   setTimeout(async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const {id, advice} = data.slip;
      adviceIdSpan.innerHTML = id;
      quoteDiv.innerHTML = `“${advice}”`;
      dualRing.classList.add("disabled");
      title.style.marginBottom = "0";
   }, 500);
   setTimeout(() => {
      ctaBtn.classList.remove("disabled");
      isDisabled = false;
   }, 2000);
};
