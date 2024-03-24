const menu = document.querySelector('.nav'),
    btn = document.querySelector('.burger'),
    btnLine = document.querySelector('.burger__line'),
    myPage = document.querySelector('.page');

btn.addEventListener('click',() => {
    btnLine.classList.toggle('open-btn')
    menu.classList.toggle('open-menu')
    myPage.classList.toggle('scroll-hidden')
})