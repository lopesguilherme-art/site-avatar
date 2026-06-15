setInterval(() => {
  const p = document.createElement("div");

  p.classList.add("particle");
  p.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 6000);
}, 200);