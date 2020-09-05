import { bar } from './bar.js';

const img = document.getElementById('img') as HTMLImageElement;
img.src = bar.toDataURL();

const grid = document.getElementById('grid') as HTMLCanvasElement;
const ctx = grid.getContext('2d');

ctx.strokeStyle = 'red';
ctx.lineWidth = 1;
ctx.globalAlpha = 1;
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(8, 0);
ctx.lineTo(8, 4);
ctx.stroke();
