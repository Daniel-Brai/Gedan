// getting elements
const menu = document.querySelector('#mobile-menu')
const home = document.querySelector('#Home')
const about  = document.querySelector('#About')
const services = document.querySelector('#Services')
const work = document.querySelector('#Work')
const contact = document.querySelector('#Contact')


// menu state interactivity
// open menu functionality
const openbtn = document.querySelector('#mobile-menu-open')
openbtn.addEventListener('click', () => { 
  menu.classList.toggle('hidden')
  menu.classList.toggle('openMenu')
})


// close menu functionality
const closebtn = document.querySelector('#mobile-menu-close')
closebtn.addEventListener('click', () => { 
  menu.classList.toggle('hidden')
  menu.classList.toggle('closeMenu')
})

// close mobile menu if a link is clicked 
const links = document.querySelectorAll('.link')
links.forEach(link => {
  link.addEventListener('click', () => { 
    menu.classList.toggle('hidden')
    menu.classList.toggle('closeMenu')
  })
});


// scroll for navbar to hide gedan logo
window.onscroll = () => {
  if (window.innerWidth < 640 ) { 
    if (scrollY > 50) { 
      document.querySelector('#gedan-logo').classList.add('hidden')
    } else if (scrollY < 300 ) { 
      document.querySelector('#gedan-logo').classList.remove('hidden')
    }
  }

}
onscroll()

// for large screens
const linkHome = document.querySelector('#homeLink')
linkHome.addEventListener('click', () => { 
  home.scrollIntoView()
})

const linkAbout = document.querySelector('#aboutLink')
linkAbout.addEventListener('click', () => { 
  about.scrollIntoView()
})

const linkServices = document.querySelector('#servicesLink')
linkServices.addEventListener('click', () => { 
  services.scrollIntoView()
})

const linkWork = document.querySelector('#workLink')
linkWork.addEventListener('click', () => { 
  work.scrollIntoView()
})

const linkContact = document.querySelector('#contactLink')
linkContact.addEventListener('click', () => { 
  contact.scrollIntoView()
})

// for small screens
const linkHomeMobile = document.querySelector('#homeLinkMobile')
linkHomeMobile.addEventListener('click', () => { 
  home.scrollIntoView()
})

const linkAboutMobile = document.querySelector('#aboutLinkMobile')
linkAboutMobile.addEventListener('click', () => { 
  about.scrollIntoView()
})

const linkServicesMobile = document.querySelector('#servicesLinkMobile')
linkServicesMobile.addEventListener('click', () => { 
  services.scrollIntoView()
})

const linkContactMobile = document.querySelector('#contactLinkMobile')
linkContactMobile.addEventListener('click', () => { 
  contact.scrollIntoView()
})

//view more in work section button
const viewBtn = document.querySelector('#view-btn')
const arrowDown = document.querySelector('#arrow-down')
viewBtn.addEventListener('click', () => {
  arrowDown.classList.add('-rotate-90')
})


// const hasHorizontalScrollbar = home.scrollWidth > home.clientWidth;
// const hasVerticalScrollbar = home.scrollHeight > home.clientHeight;

// if (window.scrollY > 640 ) { 
//   document.querySelector('#nav-block').classList.toggle('bg-white')
//   document.querySelector('#nav-block').classList.toggle('z-[2000]')
//   document.querySelector('#nav-block').classList.add('shadow-xl')
// } else if ( window.scrollY < 640 ) { 
//   document.querySelector('#nav-block').classList.toggle('bg-white')
//   document.querySelector('#nav-block').classList.add('shadow-xl')
// }

// if (hasHorizontalScrollbar && hasVerticalScrollbar) { 
//   document.querySelector('#nav-block').classList.toggle('z-[1000]')
// } else { 
//   document.querySelector('#nav-block').classList.toggle('z-[1000]')
// }


// footer date
const footerEl = document.querySelector('#copyright')
let year =  new Date().getFullYear();

footerEl.innerHTML = `<p class="text-center">&copy; Copyright ${year} Gedan Global Options Ltd RC:746602.</p>`