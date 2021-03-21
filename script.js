const getId = id => document.getElementById(id)
const body = document.body

const toggleClass = () => {
    body.classList.toggle('over')
    if (body.classList.contains('over')) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'visible';
    }
}

getId('btnMenu').addEventListener('click', toggleClass)
