let open = document.querySelector(".open");
let close = document.querySelector(".close");
let nav = document.querySelector(".nav-content");

open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  nav.style.transform = "scale(1)";
  nav.style.opacity = 1;
});

close.addEventListener("click", () => {
  open.style.display = "block";
  close.style.display = "none";
  nav.style.transform = "scale(0)";
  nav.style.opacity = 0;
});
