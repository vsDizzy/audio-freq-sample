const bar = document.getElementById('bar');
drawBar();
export default bar.toDataURL();
function drawBar() {
    const ctx = bar.getContext('2d');
    const grd = ctx.createLinearGradient(0, 0, 0, bar.height);
    grd.addColorStop(0, 'red');
    grd.addColorStop(0.5, 'yellow');
    grd.addColorStop(1, 'green');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, bar.width, bar.height);
}
//# sourceMappingURL=bar.js.map