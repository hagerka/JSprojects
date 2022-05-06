const canvas = document.querySelector(".myCanvas");
console.log(canvas);
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

for (let i = 0; i<10; i++){
ctx.fillStyle="red";
ctx.beginPath();
ctx.ellipse(100+110*i, 100+110*i, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
}

for (let i = 0; i<10; i++){
ctx.fillStyle="blue";
ctx.beginPath();
ctx.ellipse(100+110*i, 100+110*i, 50, 75, -Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
}