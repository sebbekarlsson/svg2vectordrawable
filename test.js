


const s2v = require('./src/index')

let svg =`<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 51.1 (57501) - http://www.bohemiancoding.com/sketch -->
    <title>camera</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M7.66666667,5 L9,3 L15,3 L16.3333333,5 L22,5 L22,21 L2,21 L2,5 L7.66666667,5 Z M12,19 C15.3137085,19 18,16.3137085 18,13 C18,9.6862915 15.3137085,7 12,7 C8.6862915,7 6,9.6862915 6,13 C6,16.3137085 8.6862915,19 12,19 Z M12,17 C9.790861,17 8,15.209139 8,13 C8,10.790861 9.790861,9 12,9 C14.209139,9 16,10.790861 16,13 C16,15.209139 14.209139,17 12,17 Z M19,9 C19.5522847,9 20,8.55228475 20,8 C20,7.44771525 19.5522847,7 19,7 C18.4477153,7 18,7.44771525 18,8 C18,8.55228475 18.4477153,9 19,9 Z M3,3 L6,3 L6,4 L3,4 L3,3 Z" fill="#000000" fill-rule="nonzero"></path>
    </g>
</svg>`;

// svg = svg.replace(/\n/g, '');


s2v(svg)