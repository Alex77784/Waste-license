let columnQuestions = document.querySelector('.often-questions__col-question');

columnQuestions.addEventListener('click', openSpoller);
function openSpoller(event) {
    if (event.target.closest('.often-questions__question')) {
        let blockReply = event.target.offsetParent.children[2];
        let x = [...blockReply.querySelectorAll('p')].reduce((acc, el) => acc + el.clientHeight, 0);

        for (let elem of this.children) {
            elem.children[2].setAttribute('style', 'max-height: 0px; mapgin-buttom:0px;');
            elem.children[2].classList.remove('active');
        }

        blockReply.style.maxHeight = x + 'px';
        blockReply.classList.add('active');
    }
    if (event.target.closest('.often-questions__close-spr')) {
        event.target.offsetParent.children[2].style.maxHeight = '0px';
        event.target.offsetParent.children[2].classList.remove('active');
    }
}
console.log(getComputedStyle(columnQuestions.children[0]))