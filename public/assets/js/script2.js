// footer date
const footerEl = document.querySelector('#copyright')
let year =  new Date().getFullYear();

footerEl.innerHTML = `<p class="text-center font-medium">&copy; Copyright ${year} Gedan Global Options Ltd RC:746602.</p>`
