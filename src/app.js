import "./style.css";

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace("-translate-x-full", "translate-x-0");
      setTimeout(() => {
        entry.target.classList.replace("opacity-0", "opacity-100");
      }, 500);
    } else {
      entry.target.classList.replace("translate-x-0", "-translate-x-full");
      entry.target.classList.replace("opacity-100", "opacity-0");
    }
  });
});

const hidden = document.querySelectorAll(".bling");
hidden.forEach((el) => observer.observe(el));
