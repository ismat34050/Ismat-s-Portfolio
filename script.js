document.addEventListener("DOMContentLoaded", function () {
  let words = document.querySelectorAll(".word");
  words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.classList.add("letter");
      word.appendChild(span);
    });
    word.style.display = "none";
  });

  let currentWordIndex = 0;
  let maxWordIndex = words.length - 1;

  function changeText() {
    let currentWord = words[currentWordIndex];
    currentWord.style.display = "inline";

    let letters = currentWord.querySelectorAll(".letter");

    Array.from(letters).forEach((letter, index) => {
      setTimeout(() => {
        letter.style.opacity = 1;
      }, index * 50);
    });

    setTimeout(() => {
      Array.from(letters).forEach((letter, index) => {
        setTimeout(() => {
          letter.style.opacity = 0;
        }, index * 50);
      });

      setTimeout(() => {
        currentWord.style.display = "none";
        currentWordIndex =
          currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        changeText();
      }, letters.length * 50);
    }, 3000);
  }

  changeText(); // Start the text change process
});

// --------------------------------------------------------Circle Skill Javascript---------------------------------------

const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style=" --i:${i}; --rot :${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// --------------------------------------------------------mix it up portfolio Section ---------------------------------------

var mixer = mixitup(".portfolio-gallery");

// --------------------------------------------------------active menu ---------------------------------------

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// --------------------------------------------------------sticky navbar ---------------------------------------

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 50);
});

// --------------------------------------------------------toggle icon navbar ---------------------------------------

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};


// --------------------------------------------------------parallax ---------------------------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

