let sliderRev = document.querySelector('.reviews__slider');
let boxControlRev = document.querySelector('.reviews__box-controls');
let amountCardsRev = sliderRev.children.length;
let showCardsRev = widthWnwRew(3, 2, 1);
let quantityScrollRev = Math.ceil(amountCardsRev / showCardsRev);
let locationSliderRev = 0;


boxControlRev.addEventListener('click', toggleByDots);
// call changeWidhtWnwRew() in ready-compn changeWidhtWnw();

function createDotRev(amount) {
    for (let i = 0; i < amount; i++) {
        let dot = document.createElement('li');
        dot.classList.add('reviews__control');
        if (i == 0) { dot.classList.add('active') };
        boxControlRev.append(dot);
    }
}
createDotRev(quantityScrollRev);

function widthWnwRew(v1, v2, v3) {
    let x;
    if (window.innerWidth > 1035) {
        x = v1;
    } else if (window.innerWidth > 767) {
        x = v2;
    } else {
        x = v3;
    }
    return x;
}

function changeWidhtWnwRew() {
    quantityScrollRev = Math.ceil(amountCardsRev / showCardsRev);
    showCardsRev = widthWnwRew(3, 2, 1);
    boxControlRev.innerHTML = '';
    createDotRev(quantityScrollRev);
}


function toggleByDots(event) {
    if (event.target.closest('.reviews__control')) {
        [...boxControlRev.children].forEach(dot => dot.classList.remove('active'));
        event.target.classList.add('active');

        [...boxControlRev.children].forEach((el, ind) => {
            if (el.classList.contains('active')) { locationSliderRev = ind; }
        })
        sliderRev.scrollTo((sliderRev.clientWidth + 20) * locationSliderRev, 0);
    }
}