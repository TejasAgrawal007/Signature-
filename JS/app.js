const colorPicker = document.querySelector("#colorPicker");
const canvaColor = document.querySelector("#canvaColor");
const fontSize = document.querySelector("#fontSize");
const canvas = document.querySelector("#myCanva");

const clearBtn = document.querySelector("#clearBtn");
const saveBtn = document.querySelector("#saveBtn");
const retrieveBtn = document.querySelector("#retrieveBtn");

const ctx = canvas.getContext("2d");

colorPicker.addEventListener("change", (e) => {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
});

canvas.addEventListener("mousedown", (e) => {
  isDrawaing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawaing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    lastX = event.offsetX;
    lastY = event.offsetY;
  }
});
