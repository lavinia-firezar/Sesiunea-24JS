const scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  // window.innerHeight reprezinta inaltimea viewport-ului.
  const viewportHeight = window.innerHeight;
  // Proprietatea scrollY reprezinta numarul de pixeli scrollati pe axa OY (cand nu am scrollat deloc este 0).
  if (window.scrollY > viewportHeight / 2) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});
