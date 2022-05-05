const canvas = document.querySelector(".myCanvas");
console.log(canvas);
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");
ctx.lineWidth = 1;
ctx.strokeRect(0, 0, 10, 10);
for (let i = 0; i < width * height; i++) {
  ctx.translate(10, 10);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 10, 10);
}
