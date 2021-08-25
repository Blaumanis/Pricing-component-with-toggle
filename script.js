const inner = document.getElementById("inner");
const outter = document.getElementById("outter");
// const h3 = document.getElementsByTagName('h3');
const bh = document.getElementById("basich3");
const ph = document.getElementById("profh3");
const mh = document.getElementById("masterh3");

outter.addEventListener("click", () => {
  inner.classList.toggle("active");
  outter.classList.toggle("active");

  if (bh.innerHTML === "$ 19.99") {
    bh.innerHTML = "$ 199.99";
  } else {
    bh.innerHTML = "$ 19.99";
  }

  if (ph.innerHTML === "$ 24.99") {
    ph.innerHTML = "$ 249.99";
  } else {
    ph.innerHTML = "$ 24.99";
  }

  if (mh.innerHTML === "$ 39.99") {
    mh.innerHTML = "$ 399.99";
  } else {
    mh.innerHTML = "$ 39.99";
  }
});
