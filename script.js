const lines = document.querySelectorAll('.line')

function randomizeLines(lines) {
  for (let i = 0; i < lines.length; i++) {
    if (Math.random() < 0.5) {
      lines[i].style.rotate = '90deg';
    } else {
      lines[i].style.rotate = '0deg';
    }
  }
}

randomizeLines(lines)

setInterval(() => randomizeLines(lines), 10000);
