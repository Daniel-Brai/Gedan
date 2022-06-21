import linkServices  from './script.js'

const services = document.querySelector('#Services')
services.addEventListener('click', () => {
    window.location.href = '/'
    linkServices.scrollIntoView()
})