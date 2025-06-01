import "./style.css";

let menu = document.getElementById("menu");
let isOpen = false;
let mobileM = document.getElementById("mobile-menu");
let menuImg = document.getElementById("menu-img");

function openNclose() {
  if (!isOpen) {
    isOpen = true;
    mobileM.classList.replace("hidden", "flex");
    mobileM.classList.replace("opacity-0", "opacity-100");
    menu.classList.replace("rotate-0", "rotate-[1800deg]");
    setTimeout(change, 300);
  } else {
    mobileM.classList.replace("flex", "hidden");
    mobileM.classList.replace("opacity-100", "opacity-0");
    menu.classList.replace("rotate-[1800deg]", "rotate-0");
    setTimeout(change, 300);
    isOpen = false;
  }
}

function change() {
  if (isOpen) {
    menuImg.setAttribute("src", "/public/assest/close-menu.png");
  } else {
    menuImg.setAttribute("src", "/public/assest/open-menu.png");
  }
}

menu.onclick = openNclose;

// Menu Buttons

let btnAll = document.getElementById("All");
let allArr = document.querySelectorAll(".all");
let allBtn = document.querySelectorAll(".btns");

let bgrBtn = document.getElementById("burger");
let tcsBtn = document.getElementById("tacos");
let pzBtn = document.getElementById("pizza");
let mtlBtn = document.getElementById("matloue");
let pnBtn = document.getElementById("panini");
let lebBtn = document.getElementById("lebanese");
console.log(btnAll);
console.log(allBtn);
console.log(allArr);

function restyle() {
  allBtn.forEach((el) => {
    el.classList.replace("opacity-100", "opacity-50");
  });
}

btnAll.onclick = (e) => {
  restyle();
  e.target.classList.replace("opacity-50", "opacity-100");
  allArr.forEach((el) => {
    if (!el.classList.contains("all")) {
      el.classList.replace("flex", "hidden");
    }
    if (el.classList.contains("all")) {
      el.classList.replace("hidden", "flex");
    }
  });
};

bgrBtn.onclick = (e) => {
  restyle();
  e.target.classList.replace("opacity-50", "opacity-100");
  allArr.forEach((el) => {
    if (!el.classList.contains("burgers")) {
      el.classList.replace("flex", "hidden");
    }
    if (el.classList.contains("burgers")) {
      el.classList.replace("hidden", "flex");
    }
  });
};

tcsBtn.onclick = (e) => {
  restyle();
  e.target.classList.replace("opacity-50", "opacity-100");
  allArr.forEach((el) => {
    if (!el.classList.contains("tacos")) {
      el.classList.replace("flex", "hidden");
    }
    if (el.classList.contains("tacos")) {
      el.classList.replace("hidden", "flex");
    }
  });
};

pzBtn.onclick = (e) => {
  restyle();
  e.target.classList.replace("opacity-50", "opacity-100");
  allArr.forEach((el) => {
    if (!el.classList.contains("pizza")) {
      el.classList.replace("flex", "hidden");
    }
    if (el.classList.contains("pizza")) {
      el.classList.replace("hidden", "flex");
    }
  });
};
mtlBtn.onclick = (e) => {
  restyle();
  e.target.classList.replace("opacity-50", "opacity-100");
  allArr.forEach((el) => {
    if (!el.classList.contains("matlou3")) {
      el.classList.replace("flex", "hidden");
    }
    if (el.classList.contains("matlou3")) {
      el.classList.replace("hidden", "flex");
    }
  });
};
pnBtn.onclick = (e) => {
  restyle();
  e.target.classList.replace("opacity-50", "opacity-100");
  allArr.forEach((el) => {
    if (!el.classList.contains("panini")) {
      el.classList.replace("flex", "hidden");
    }
    if (el.classList.contains("panini")) {
      el.classList.replace("hidden", "flex");
    }
  });
};
lebBtn.onclick = (e) => {
  restyle();
  e.target.classList.replace("opacity-50", "opacity-100");
  allArr.forEach((el) => {
    if (!el.classList.contains("lebanese")) {
      el.classList.replace("flex", "hidden");
    }
    if (el.classList.contains("lebanese")) {
      el.classList.replace("hidden", "flex");
    }
  });
};
