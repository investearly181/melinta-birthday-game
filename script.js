
const startBtn = document.getElementById('startBtn');
const gameContainer = document.querySelector('.game-container');
const intro = document.querySelector('.intro');
const result = document.getElementById('result');
const spinBtn = document.getElementById('spinBtn');
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const options = ["₹3,000 Cash", "Clothes", "Perfume", "Shoes", "₹2,000 Gift Card", "Nothing"];
const colors = ["#f54291", "#f5a142", "#42f554", "#42c5f5", "#aa42f5", "#f54242"];
let startAngle = 0;
let arc = Math.PI / (options.length / 2);
let spinAngle = 0;
let isSpinning = false;

function drawWheel() {
  for (let i = 0; i < options.length; i++) {
    const angle = startAngle + i * arc;
    ctx.fillStyle = colors[i];
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 250, angle, angle + arc, false);
    ctx.lineTo(250, 250);
    ctx.fill();
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.translate(250 + Math.cos(angle + arc / 2) * 150, 250 + Math.sin(angle + arc / 2) * 150);
    ctx.rotate(angle + arc / 2);
    ctx.fillText(options[i], -30, 10);
    ctx.restore();
  }
}

drawWheel();

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  let targetIndex = options.indexOf("₹3,000 Cash");
  let degreesPerSlice = 360 / options.length;
  let extraDegrees = 360 * 5; // Spin 5 full times
  let targetDegrees = 360 - (targetIndex * degreesPerSlice + degreesPerSlice / 2);
  let totalDegrees = extraDegrees + targetDegrees;

  let current = 0;
  const interval = setInterval(() => {
    current += 10;
    if (current >= totalDegrees) {
      clearInterval(interval);
      isSpinning = false;
      result.textContent = "🎊 Congratulations Melinta! You won ₹3,000 Cash! 🎊";
    }
    canvas.style.transform = `rotate(${current}deg)`;
  }, 10);
}

spinBtn.addEventListener("click", spinWheel);
startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  gameContainer.classList.remove("hidden");
});
