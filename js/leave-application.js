let btnAppl = document.querySelectorAll('.leave-application-js');
let popUp = document.querySelector('.pop-up');
let btnClose = popUp.querySelector('.pop-up__close-popup');
let formSentPhone = document.forms.getPhone;
let inputName = formSentPhone.user;
let inputPhone = formSentPhone.phone;
let token = "6126020399:AAFXu7EJ5rBMRX_fOPcsT-mxKQa6jvujEaE";
let chatId = "-976033618";
let siteName = "Лицензия на работу с отходами";
let txt = '';

btnAppl.forEach(btn => btn.addEventListener('click', popup));
btnClose.addEventListener('click', closePopup);

formSentPhone.addEventListener('submit', sentOnTelegram)
function sentOnTelegram(e) {
    let phoneNum = '';
    e.preventDefault();

    if (validateName() && validatePhone()) {
        let dataForm = {
            'Заказ с сайта:': siteName,
            'Имя:': inputName.value,
            'Телефон:': inputPhone.value
        }
        for (let key in dataForm) {
            phoneNum += `<b>${key}</b> ${dataForm[key]}%0A`;
        }

        fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${phoneNum}`);

        inputName.value = '';
        inputPhone.value = '';
        popUp.classList.remove('active');

        document.body.insertAdjacentHTML('afterBegin', '<div id = "message-del">Cообщение отправлено!</div>');

        setTimeout(function () {
            document.querySelector('#message-del').remove();
        }, 2400)
    }
}

inputName.addEventListener('blur', validateName);
inputName.addEventListener('focus', cleanInput);
inputPhone.addEventListener('blur', validatePhone);
inputPhone.addEventListener('focus', (e) => {
    inputPhone.style.color = 'black';
    e.currentTarget.value = `+`;
});

function cleanInput() {
    inputName.value = '';
    inputName.style.color = 'black';
}

function validateName() {
    let flag = true;
    if (inputName.value == '') {
        inputName.value = 'Укажите Ваше имя!';
        inputName.style.color = 'red';
        flag = false;
    };
    return flag;
}

function validatePhone() {
    let flag = true;
    if (/\+?[0-9]{10,15}/.test(inputPhone.value)) {

    } else {
        inputPhone.value = '+X (XXX) XXX-XX-XX';
        inputPhone.style.color = 'red';
        flag = false;
    }
    return flag;
}

function popup() {
    popUp.classList.add('active')
}

function closePopup() {
    popUp.classList.remove('active')
}