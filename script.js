const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

const prizes = ["₹3,000 Cash", "Clothes", "Perfume", "Shoes", "₹2,000 Gift Card", "Nothing"];
const colors = ["#f6d365", "#fda085", "#ff9a9e", "#c1c8e4", "#84fab0", "#fbc2eb"];
let angle = 0;

// Draw wheel
function drawWheel() {
  const slices = prizes.length;
  const arcSize = (2 * Math.PI) / slices;

  for (let i = 0; i < slices; i++) {
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.fillStyle = colors[i];
    ctx.arc(250, 250, 250, arcSize * i, arcSize * (i + 1));
    ctx.lineTo(250, 250);
    ctx.fill();

    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(arcSize * i + arcSize / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.fillText(prizes[i], 230, 10);
    ctx.restore();
  }
}

drawWheel();

// Force land on ₹3,000 Cash
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  let rotation = 360 * 5 + (360 / prizes.length) * 0; // index 0 = ₹3,000 Cash
  canvas.style.transition = "transform 5s ease-out";
  canvas.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    result.textContent = `🎉 You won: ₹3,000 Cash! 🎉`;
    launchConfetti();
    spinBtn.disabled = false;
  }, 5000);
});

// Simple confetti
function launchConfetti() {
  const confetti = document.getElementById("confetti");
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "10px";
    particle.style.height = "10px";
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.top = Math.random() * 100 + "%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animation = "fall 3s ease-out forwards";
    confetti.appendChild(particle);
    setTimeout(() => particle.remove(), 3000);
  }
}
