'use strict';
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

const menuCars = document.querySelector('#menu-cars');

menuCars.addEventListener('click', () => {
    document.querySelector('#cars').scrollIntoView({behavior: "smooth"});
});

const menuPrice = document.querySelector('#menu-price');

menuPrice.addEventListener('click', () => {
    document.querySelector('#price').scrollIntoView({behavior: "smooth"});
})

const priceButton = document.querySelector('#price-button');
let priceMessage = document.querySelector('#price-message');

priceButton.addEventListener('click', () => {
    if(document.querySelector('#price-name').value === '') {
        priceMessage.textContent = 'Заполните поле имя!';
        priceMessage.classList.add('color-red');
    } else if(document.querySelector('#price-phone').value === '') {
        priceMessage.textContent = 'Заполните поле телефона!';
        priceMessage.classList.add('color-red');
    } else if(document.querySelector('#price-car').value === '') {
        priceMessage.textContent = 'Заполните поле автомобиля!';
        priceMessage.classList.add('color-red');
    } else {
        priceMessage.textContent = 'Спасибо за заявку, мы свяжемся с Вами в ближайшее время!';
        priceMessage.className = 'color-blue';
    }
});


