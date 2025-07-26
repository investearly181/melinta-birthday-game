// Image Slideshow
const slides = document.querySelectorAll('.slide');
let current = 0;
setInterval(() => {
  slides[current].style.display = 'none';
  current = (current + 1) % slides.length;
  slides[current].style.display = 'block';
}, 3000);

// Game start
document.getElementById('startBtn').onclick = () => {
  document.querySelector('.intro-screen').style.display = 'none';
  document.querySelector('.game-screen').style.display = 'block';
};

// Spin wheel logic
const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spinBtn');
const resultText = document.getElementById('resultText');

const rewards = ['₹3000', 'Better luck next time', '₹1000', '₹500', 'Try again', '₹3000'];
const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];

function drawWheel() {
  const arcSize = (2 * Math.PI) / rewards.length;
  rewards.forEach((reward, i) => {
    const angle = i * arcSize;
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 180, angle, angle + arcSize);
    ctx.lineTo(200, 200);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.font = '16px Arial';
    ctx.fillText(reward, 200 + 100 * Math.cos(angle + arcSize / 2), 200 + 100 * Math.sin(angle + arcSize / 2));
  });
}

drawWheel();

spinBtn.onclick = () => {
  spinBtn.disabled = true;
  let angle = 0;
  const spin = setInterval(() => {
    canvas.style.transform = `rotate(${angle}deg)`;
    angle += 20;
  }, 20);
  
  setTimeout(() => {
    clearInterval(spin);
    const result = rewards[Math.floor(Math.random() * rewards.length)];
    resultText.innerText = `🎁 You won: ${result}`;
    spinBtn.disabled = false;
  }, 3000);
};
