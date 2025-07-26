// script.js
let segments = [
  "🎉 You are Loved!",
  "🌟 You’re Irreplaceable!",
  "🍰 Cake is Waiting!",
  "💖 Sister for Life!",
  "🎁 Surprise Coming!",
  "🦄 Magical You!",
  "🎂 Happy Birthday!",
  "🌈 Shine Bright!",
];

let angle = 0;
let isSpinning = false;

function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  const wheel = document.getElementById("wheel");
  const result = document.getElementById("result");

  const randomIndex = Math.floor(Math.random() * segments.length);
  const spinDegrees = 360 * 5 + (360 / segments.length) * randomIndex;

  angle += spinDegrees;
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${angle}deg)`;

  setTimeout(() => {
    result.textContent = segments[randomIndex];
    isSpinning = false;

    // Confetti
    for (let i = 0; i < 30; i++) {
      createConfetti();
    }

    // Play music
    document.getElementById("birthday-audio").play();
  }, 4000);
}

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.position = "fixed";
  confetti.style.width = "10px";
  confetti.style.height = "10px";
  confetti.style.backgroundColor = getRandomColor();
  confetti.style.top = "0";
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.opacity = 0.8;
  confetti.style.zIndex = 9999;
  document.body.appendChild(confetti);

  const fallTime = Math.random() * 3 + 2;
  confetti.animate(
    [
      { transform: "translateY(0)" },
      { transform: `translateY(${window.innerHeight}px)` },
    ],
    {
      duration: fallTime * 1000,
      iterations: 1,
    }
  );

  setTimeout(() => {
    confetti.remove();
  }, fallTime * 1000);
}

function getRandomColor() {
  const colors = ["#ff69b4", "#ffd700", "#00ffff", "#ff7f50", "#adff2f"];
  return colors[Math.floor(Math.random() * colors.length)];
}
