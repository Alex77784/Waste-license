let btnLeft = document.querySelector('.ready-companies__btn-left');
let btnRight = document.querySelector('.ready-companies__btn-right');
let boxSlider = document.querySelector('.ready-companies__box-slider');
let slider = document.querySelector('.slider');
let boxControl = document.querySelector('.ready-companies__box-controls');
let amountCards = slider.children.length;
let showCards = widthWnw(3, 2, 1);
let quantityScroll = Math.ceil(amountCards / showCards);
let locationSlider = 0;

btnLeft.addEventListener('click', shiftL);
btnRight.addEventListener('click', shiftR);
boxControl.addEventListener('click', toggleByDots);
window.addEventListener('resize', changeWidhtWnw);

function createDot(amount) {
    for (let i = 0; i < amount; i++) {
        let dot = document.createElement('li');
        dot.classList.add('ready-companies__control');
        if (i == 0) { dot.classList.add('active') };
        boxControl.append(dot);
    }
}
createDot(quantityScroll);

function widthWnw(v1, v2, v3) {
    let x;
    if (window.innerWidth > 1170) {
        x = v1;
    } else if (window.innerWidth > 850) {
        x = v2;
    } else {
        x = v3;
    }
    return x;
}

function changeWidhtWnw() {
    showCards = widthWnw(3, 2, 1);
    quantityScroll = Math.ceil(amountCards / showCards);
    boxControl.innerHTML = '';
    createDot(quantityScroll);
    changeWidhtWnwRew();
}

function shiftL() {
    if (locationSlider > 0) { locationSlider-- };
    slider.scrollBy(-slider.offsetWidth, 0);

    [...boxControl.children].forEach(dot => dot.classList.remove('active'));
    [...boxControl.children][locationSlider].classList.add('active');
}

function shiftR() {
    if (quantityScroll - 1 != locationSlider) { locationSlider++ };
    slider.scrollBy(slider.offsetWidth, 0);

    [...boxControl.children].forEach(dot => dot.classList.remove('active'));
    [...boxControl.children][locationSlider].classList.add('active');
}

function toggleByDots(event) {
    if (event.target.closest('.ready-companies__control')) {
        [...boxControl.children].forEach(dot => dot.classList.remove('active'));
        event.target.classList.add('active');

        [...boxControl.children].forEach((el, ind) => {
            if (el.classList.contains('active')) { locationSlider = ind; }
        })
        slider.scrollTo((slider.offsetWidth) * locationSlider, 0);
    }
}

// view-Card ===========================================================================

slider.addEventListener('click', viewCard);
function viewCard(event) {
    if (event.target.closest('.slider__card')) {
        let img = event.target.offsetParent;
        bodyLock.classList.add('active');
        let viewCard = `
        <div class="view-card">
            <div>
                ${img.children[0].outerHTML}
                ${img.children[1].outerHTML}
            </div>
        </div>
        `;

        slider.insertAdjacentHTML('afterbegin', viewCard);
    }
    document.querySelector('.view-card>div').addEventListener('click', function () {
        this.classList.add('active');
        bodyLock.classList.remove('active');
        setTimeout(() => document.querySelector('.view-card').remove(), 500);
    });
}
