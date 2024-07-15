let burger = document.querySelector('.mob svg')
let center = document.querySelector('.n-center')


burger.onclick = function () {
    center.classList.toggle('active')
    burger.classList.toggle('mob-active')
    document.body.classList.toggle('hidden')
}