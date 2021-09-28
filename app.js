const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

let isPressed = false;
let size = 5;
let color = "black";
let x = undefined;
let y = undefined;

// Drawing lines & circles in canvas
const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

const drawCircle = (x, y) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
};

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

// Size control
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const sizeEl = document.querySelector("#size");

const updateSizeEl = () => {
  sizeEl.textContent = size;
};

increaseBtn.addEventListener("click", () => {
  size++;
  if (size > 50) {
    size = 50;
  }
  updateSizeEl();
});
decreaseBtn.addEventListener("click", () => {
  size--;
  if (size < 5) {
    size = 5;
  }
  updateSizeEl();
});

// Changing the color
const colorEl = document.querySelector("#color");
colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

// Clearing canvas
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Callout text
const h1 = document.querySelector("h1");
window.addEventListener("load", () => {
  h1.classList.add("callout");
  setTimeout(() => {
    h1.style.display = "none";
  }, 1000);
});
