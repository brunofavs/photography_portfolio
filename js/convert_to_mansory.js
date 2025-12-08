// import Masonry from "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js";
// Not necessary with CDN, only for npm package

// https://www.youtube.com/watch?v=_IAFA2kA840

window.onload = () => {
const grid = document.querySelector('.grid');
const masonry = new Masonry (grid, { 
    itemSelector: '.grid-item',
    // columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 20,
    stagger:30,

  });

};


// layout Masonry after each image loads
// I dont think this is working
// grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });

