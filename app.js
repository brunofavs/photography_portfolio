// import Masonry from "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js";
// Not necessary with CDN, only for npm package

// https://www.youtube.com/watch?v=_IAFA2kA840

window.onload = () => {
const grid = document.querySelector('.grid');
const masonry = new Masonry (grid, { 
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 20

  });

};


// //Wait for all images to Load
// const $grid = $('.grid').imagesLoaded(() => {
// //Activate Masonry Grid
// $('.grid').masonry({
// //Select items
// itemSelector: '.grid-item',
// //Set width
// columnWidth: 80,
// fitWidth: true,
// })
// });
