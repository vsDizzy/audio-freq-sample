const grid = document.getElementById('grid');
drawGrid();
export default grid.toDataURL();
function drawGrid() {
    const ctx = grid.getContext('2d');
    ctx.clearRect(0, 0, grid.width, grid.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, grid.width, grid.height);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(grid.width, 0);
    ctx.lineTo(grid.width, grid.height);
    ctx.stroke();
}
//# sourceMappingURL=grid.js.map