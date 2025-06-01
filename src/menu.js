// Slider for Menu Page

let pngArr = [
  {
    food: "Pizza Marguerite",
    para: "A delicious classic made with rich tomato sauce, black olives, and melted cheese. Simple, tasty, and satisfying — all for just 300 DA!",
    png: "/public/assest/margurite.png",
  },
  {
    food: "Burger Simple",
    para: "Savor the taste of our classic burger with a soft Biggy bun, fresh onion, crisp lettuce, juicy tomato, and a touch of VH sauce — all served with fruits on the side. Just 250 DA!",
    png: "/public/assest/burgerSimple.png",
  },
  {
    food: " Panini Kebab",
    para: "Grilled kebab wrapped in a crispy panini, stuffed with golden fries and melted cheese. A full-flavor bite for just 300 DA!",
    png: "/public/assest/panini.png",
  },
  {
    food: " Lebanese Kebab",
    para: "A delicious wrap filled with juicy kebab, crispy fries, and creamy cheese – inspired by Lebanese street flavors, only 350 DA!",
    png: "/public/assest/Lebanese.png",
  },
];

let tiTle = document.getElementById("menu-tit");
let desc = document.getElementById("menu-dsc");
let img = document.getElementById("menuPng");
let currr = document.querySelectorAll(".currentt");
let ind = 1;

function slides() {
  if (ind === pngArr.length) ind = 0;
  currr.forEach((el, index) => {
    if (ind === index) {
      el.classList.replace("bg-white", "bg-emerald-400");
    } else {
      el.classList.replace("bg-emerald-400", "bg-white");
    }
  });
  tiTle.classList.remove("animate-bingo");
  void tiTle.offsetWidth;
  tiTle.classList.add("animate-bingo");
  tiTle.innerHTML = pngArr[ind].food;

  desc.classList.remove("animate-bingo");
  void desc.offsetWidth;
  desc.classList.add("animate-bingo");
  desc.innerHTML = pngArr[ind].para;

  img.classList.remove("animate-bingo");
  void img.offsetWidth;
  img.setAttribute("src", pngArr[ind].png);
  img.classList.add("animate-bingo");
  ind++;
}

setInterval(slides, 8000);
