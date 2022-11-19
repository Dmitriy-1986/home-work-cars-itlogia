'use strict';

document.addEventListener("DOMContentLoaded", function() {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 7) + 'px,' + ((event.clientY * 0.2) / 7) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
    })
});

const  carButtons = document.querySelectorAll('.car-button');

for(const carButton of carButtons) {    
    carButton.addEventListener('click', () => {
        document.querySelector('.price').scrollIntoView({behavior: "smooth"});
    })
};
