export const grid = document.getElementById('grid') as HTMLCanvasElement;

drawGrid();

function drawGrid() {
  const ctx = grid.getContext('2d');
  ctx.lineWidth = 2;
  ctx.beginPath();

  ctx.moveTo(0, 0);
  ctx.lineTo(8, 0);
  ctx.lineTo(8, 4);

  ctx.stroke();
}
