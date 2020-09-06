import barData from './bar.js';
import gridData from './grid.js';
import './grid.js';

const bar = (document.getElementById('s-bar') as unknown) as SVGImageElement;
bar.setAttribute('href', barData);

const grid = (document.getElementById('s-grid') as unknown) as SVGImageElement;
grid.setAttribute('href', gridData);
