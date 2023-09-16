const counter = document.querySelector(".count");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target.classList;

    if (target.contains("increase")) {
      count++;
    } else if (target.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }

    counter.textContent = count;
  });
});
