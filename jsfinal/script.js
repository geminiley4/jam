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
    alert('This function is not available on your device yet.')
})
deal.addEventListener('click', () => {
    alert('This function is not available on your device yet.')
})
trybtn.addEventListener('click', () => {
    alert('This function is not available on your device yet.')
})
linkshr1.addEventListener ('click', () => {
    alert('Looks like this option is not available yet.')
})
linkshr2.addEventListener ('click', () => {
    alert('Looks like this option is not available yet.')
})