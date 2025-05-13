
const canvas = document.getElementById("birthdayCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawMoon() {
  ctx.beginPath();
  ctx.arc(canvas.width - 100, 100, 40, 0, Math.PI * 2);
  ctx.fillStyle = "lightyellow";
  ctx.fill();
}

function drawStars() {
  for (let i = 0; i < 80; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);
    const r = Math.random() * 2 + 1;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

function drawTree() {
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(60, canvas.height - 200, 30, 120);

  ctx.beginPath();
  ctx.arc(75, canvas.height - 220, 50, 0, Math.PI * 2);
  ctx.arc(100, canvas.height - 250, 50, 0, Math.PI * 2);
  ctx.arc(50, canvas.height - 250, 50, 0, Math.PI * 2);
  ctx.fillStyle = "forestgreen";
  ctx.fill();
}

function drawBalloons() {
  const colors = ["red", "yellow", "deeppink", "cyan", "orange"];
  const positions = [200, 300, 400, 500, 600];
  positions.forEach((x, i) => {
    ctx.beginPath();
    ctx.arc(x, 150, 20, 0, Math.PI * 2);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, 170);
    ctx.lineTo(x, 220);
    ctx.strokeStyle = "white";
    ctx.stroke();
  });
}

function drawCake() {
  ctx.fillStyle = "chocolate";
  ctx.fillRect(canvas.width/2 - 50, canvas.height - 130, 100, 60);

  ctx.fillStyle = "mistyrose";
  ctx.fillRect(canvas.width/2 - 40, canvas.height - 100, 80, 30);

  const candleX = [-30, -10, 10, 30];
  candleX.forEach(offset => {
    const x = canvas.width/2 + offset;
    ctx.fillStyle = "white";
    ctx.fillRect(x - 2, canvas.height - 100, 4, 20);
    ctx.beginPath();
    ctx.arc(x, canvas.height - 100, 5, 0, Math.PI * 2);
    ctx.fillStyle = "orange";
    ctx.fill();
  });

  setTimeout(() => {
    // Blow out effect
    candleX.forEach(offset => {
      const x = canvas.width/2 + offset;
      ctx.beginPath();
      ctx.arc(x, canvas.height - 100, 5, 0, Math.PI * 2);
      ctx.fillStyle = "midnightblue";
      ctx.fill();

      // Smoke
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(x + Math.random()*10 - 5, canvas.height - 110 - i*10, 3, 0, Math.PI * 2);
        ctx.fillStyle = "lightgray";
        ctx.fill();
      }
    });
  }, 6000);
}

function typeMessage(text, elementId, speed = 50, callback) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = "";
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

function showMessages() {
  typeMessage("Happy Birthday My Cutest Best Friend ESHA 🎉", "mainMessage", 80, () => {
    const msg = "Today the world got brighter because of you.\nYou're not just a friend, you're a piece of my heart.\nYour laughter, kindness, and spirit make everything better.\nI wish you all the happiness, joy, and love in the world.\nI'm really lucky to have you. ✨";
    typeMessage(msg, "subMessage", 40);
  });
}

function startScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
  drawMoon();
  drawTree();
  drawBalloons();
  showMessages();
  setTimeout(drawCake, 5000);
}

document.getElementById("replayBtn").addEventListener("click", () => {
  startScene();
});

startScene();
