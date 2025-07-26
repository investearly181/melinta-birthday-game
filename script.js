function startGame() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
  document.getElementById("birthday-audio").play();
}

document.getElementById("spinBtn").addEventListener("click", function () {
  const wheel = document.getElementById("wheel");
  const result = document.getElementById("result");

  // Force result to ₹3,000 Cash (first sector, 0-60 degrees)
  let degrees = 360 * 5 + 30; // lands in first slice
  wheel.style.transition = "transform 5s ease-out";
  wheel.style.transform = `rotate(${degrees}deg)`;

  this.disabled = true;

  setTimeout(() => {
    result.innerHTML = "You won ₹3,000 Cash! 🎉";
    showCelebration();
  }, 5200);
});

function showCelebration() {
  document.getElementById("celebration").style.display = "block";
}
