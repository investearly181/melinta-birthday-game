let angle = 0;

function startGame() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("song").play();
}

function spin() {
  const wheel = document.getElementById("wheel");
  const resultAngle = 0 + 360 * 5; // Fixed to land on ₹3000 Cash

  angle += resultAngle;

  wheel.style.transform = `rotate(${angle}deg)`;

  setTimeout(() => {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("celebration").classList.remove("hidden");
  }, 4000);
}
