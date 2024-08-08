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


canvas.addEventListener('mouseup', () => {
  isDrawaing = false
})

canvaColor.addEventListener('change', (e) => {
  ctx.fillStyle = e.target.value
  ctx.fillRect(0,0,600, 450)
})

fontSize.addEventListener('change', (e) => {
  ctx.lineWidth = e.target.value
})

clearBtn.addEventListener('click', (e) => {
  ctx.clearRect(0,0, canvas.width, canvas.height)
})

saveBtn.addEventListener('click', () => {
  localStorage.setItem('convasContexts', canvas.toDataURL());

  let link = document.createElement('a');

  link.download = 'my-canva.png';

  link.href = canvas.toDataURL();

  link.click();
})