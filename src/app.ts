import barData from './bar.js';
import gridData from './grid.js';

const bar = (document.getElementById('s-bar') as unknown) as SVGImageElement;
bar.setAttribute('href', barData);

const grid = (document.getElementById('s-grid') as unknown) as SVGImageElement;
grid.setAttribute('href', gridData);

const s = document.getElementById('s') as HTMLElement;
const sData = 'data:image/svg+xml;base64,' + btoa(s.outerHTML);

const ii = document.getElementById('ii') as HTMLImageElement;
ii.src = sData;

const osc = document.getElementById('osc') as HTMLCanvasElement;
const ctx = osc.getContext('2d');

let an: AnalyserNode;

function draw() {
  const data = new Uint8Array(an.frequencyBinCount);
  an.getByteFrequencyData(data);

  ctx.clearRect(0, 0, osc.width, osc.height);
  for (let i = 0; i < data.length; i++) {
    const x = Math.floor(data[i] / 8);
    const h = x * 8;
    let nh = osc.height - h;
    ctx.drawImage(ii, 0, nh, 12, h, 12 * i, nh, 12, h);
  }

  requestAnimationFrame(draw);
}

const m = navigator.getUserMedia(
  { audio: true },
  (ms) => {
    const ac = new AudioContext();
    an = ac.createAnalyser();
    an.fftSize = 64;

    const src = ac.createMediaStreamSource(ms);
    src.connect(an);

    draw();
  },
  (e) => {
    console.error(e);
  }
);
