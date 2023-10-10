var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
});

const main = document.querySelector('.main');
const header = document.getElementById("header");
const sections = document.querySelectorAll('.section-main');
const menuOpen = document.querySelector('.navOpen-btn');
const menuClose = document.querySelector('.navClose-btn')
const menu = document.querySelector(".menu-content");
const links = document.querySelectorAll(".nav-link");



window.onscroll = () => {
  if(main.offsetTop < window.scrollY){
    header.classList.add("header-active");
  }
  else{
    header.classList.remove("header-active");
  }
  // console.log(document.querySelector('.menu').offsetTop);
  // console.log(document.querySelector('.menu').getBoundingClientRect().top);
}

menuOpen.addEventListener('click', () => {
  menu.classList.add('open');
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('open');
})

links.forEach(function(link, index){
  link.addEventListener('click', (e) => {
    if(e.target.classList.contains('active-navlink')){
      e.target.classList.add('active-navlink');
    }
    else{
      e.target.classList.add('active-navlink');
      links.forEach((l) => {
        if(l !== e.target){
          l.classList.remove('active-navlink');
        }
      })
    }
  })
})