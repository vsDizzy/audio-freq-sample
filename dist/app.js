import barData from './bar.js';
import gridData from './grid.js';
const bar = document.getElementById('s-bar');
bar.setAttribute('href', barData);
const grid = document.getElementById('s-grid');
grid.setAttribute('href', gridData);
const s = document.getElementById('s');
const sData = 'data:image/svg+xml;base64,' + btoa(s.outerHTML);
const ii = document.getElementById('ii');
ii.src = sData;
const osc = document.getElementById('osc');
const ctx = osc.getContext('2d');
const au = document.getElementById('audio');
au.addEventListener('play', (ev) => {
    ac.resume();
});
const ac = new AudioContext();
ac.suspend().then(init);
function init() {
    const an = ac.createAnalyser();
    an.fftSize = 128;
    const src = ac.createMediaElementSource(au);
    src.connect(an);
    const dn = ac.createMediaStreamDestination();
    src.connect(ac.destination);
    draw();
    function draw() {
        const data = new Uint8Array(an.frequencyBinCount);
        an.getByteFrequencyData(data);
        ctx.clearRect(0, 0, osc.width, osc.height);
        for (let i = 0; i < data.length; i++) {
            const x = Math.floor(data[i] / 8);
            const h = x * 8;
            let nh = osc.height - h;
            if (h) {
                ctx.drawImage(ii, 0, nh, 12, h, 12 * i, nh, 12, h);
            }
        }
        requestAnimationFrame(draw);
    }
}
//# sourceMappingURL=app.js.map