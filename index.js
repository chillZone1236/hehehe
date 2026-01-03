const container = document.getElementById("hearts-container");

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  const size = Math.random() * 16 + 18;
  heart.style.fontSize = size + "px";

  // ✅ PERFECT POSITION FIX
  const posX = x !== undefined
    ? x
    : Math.random() * (window.innerWidth - size);

  const posY = y !== undefined
    ? y
    : window.innerHeight + 20;

  heart.style.left = posX + "px";
  heart.style.top = posY + "px";

  heart.style.animationDuration = Math.random() * 4 + 4 + "s";

  // pop on click
  heart.addEventListener("click", (e) => {
    e.stopPropagation();
    heart.style.animation = "pop 0.3s forwards";
    setTimeout(() => heart.remove(), 300);
  });

  container.appendChild(heart);

  setTimeout(() => {
    if (heart.parentNode) heart.remove();
  }, 9000);
}

/* AUTO FLOATING HEARTS */
setInterval(() => {
  createHeart();
}, 300);

/* CLICK HEART BURST */
document.addEventListener("click", (e) => {
  for (let i = 0; i < 3; i++) {
    createHeart(e.clientX, e.clientY);
  }
});
