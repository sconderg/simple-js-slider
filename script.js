const btnsNext = document.querySelectorAll('.side button.next');
const btnsBack = document.querySelectorAll('.side button.back');
const oSide = document.querySelector('.side.two');

btnsNext.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const elementX = e.target.parentElement.parentElement;
        if(elementX.nextElementSibling.classList.contains('side')) {
            elementX.classList.remove('pop');
            elementX.nextElementSibling.classList.add('pop');
        } else {
            elementX.classList.remove('pop');
            document.querySelectorAll('.side')[0].classList.add('pop');
        }
    });
});

btnsBack.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const elementX = e.target.parentElement.parentElement;
        if(elementX.previousElementSibling.classList.contains('side')) {
            elementX.classList.remove('pop');
            elementX.previousElementSibling.classList.add('pop');
        } else {
            elementX.classList.remove('pop');
            document.querySelectorAll('.side')[document.querySelectorAll('.side').length - 1].classList.add('pop');
        }
    });
});