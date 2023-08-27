function addClass(array) {
    array.forEach(elem => {
        elem.classList.add('active');
    });
}
function toggleClass(array) {
    array.forEach(elem => {
        elem.classList.toggle('active');
    });
}
function removeClass(array) {
    array.forEach(elem => {
        elem.classList.remove('active');
    });
}
