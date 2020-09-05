const bar = document.getElementById('bar') as HTMLCanvasElement;

drawBar();

function drawBar() {
  const ctx = bar.getContext('2d');

  const grd = ctx.createLinearGradient(0, 0, 0, 32);
  grd.addColorStop(0, 'red');
  grd.addColorStop(0.5, 'yellow');
  grd.addColorStop(1, 'green');

  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 8, 32);
}

const img = document.getElementById('img') as HTMLImageElement;
img.src = bar.toDataURL();
