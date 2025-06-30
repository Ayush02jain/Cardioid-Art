const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const w = canvas.width;
const h = canvas.height;
const cx = w / 2;
const cy = h / 2;
const r = 250;
const totalPoints = 200;
let multiplier = 0;

// evenly spaced points on the circle
function getPoints(n, radius, centerX, centerY) {
  const points = [];
  for (let i = 0; i < n; i++) {
    const angle = (2 * Math.PI * i) / n;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push({ x, y });
  }
  return points;
}

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw points around the circle
    const points = getPoints(totalPoints, r, cx, cy);
    ctx.fillStyle = "#FFF338";
    points.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Draw thread lines
    ctx.strokeStyle = "#00FFDE;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < totalPoints; i++) {
      const j = Math.floor((i * multiplier) % totalPoints);
      ctx.beginPath();
      ctx.moveTo(points[i].x, points[i].y);
      ctx.lineTo(points[j].x, points[j].y);
      ctx.stroke();
    }

    multiplier += 0.02;
    requestAnimationFrame(draw);
  }
draw();