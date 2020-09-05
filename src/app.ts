import { bar } from './bar.js';
import './grid.js';

const img = document.getElementById('img') as HTMLImageElement;
img.src = bar.toDataURL();
