const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__menu')
const button = document.querySelector('.button')
const deal = document.querySelector('.deal-btn')
const trybtn = document.querySelector('.try-btn')
const linkshr1 = document.querySelector('.links-hr-first')
const linkshr2 = document.querySelector('.links-hr-second')
burger.addEventListener('click', () => {
    menu.classList.toggle('open')
}) 
button.addEventListener('click', () => {
    alert('Данная функция пока не доступна на вашем устройстве.')
})
deal.addEventListener('click', () => {
    alert('Данная функция пока не доступна на вашем устройстве.')
})
trybtn.addEventListener('click', () => {
    alert('Данная функция пока не доступна на вашем устройстве.')
})
linkshr1.addEventListener ('click', () => {
    alert('Похоже опция "Партнер" пока не вышла.')
})
linkshr2.addEventListener ('click', () => {
    alert('Похоже эта функция пока не вышла.')
})
