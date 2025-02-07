const popClick = document.querySelector(".prime-popup");
const primeBtn = document.querySelector(".highlight");
const overlay = document.querySelector(".overlay");

primeBtn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  e.stopPropagation();
  popClick.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

primeBtn.addEventListener("mousemove", (e) => {
  e.preventDefault();

  setTimeout(() => {
    popClick.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 1000);
});
