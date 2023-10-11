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

const bannerSliderObj = [
  {
    "id": 1,
    "image": "img/homeImg1.jpg",
    "subtitle": "We really like what we do.",
    "title": "Coffee Beans with a <br>Perfect Aroma"
  },
  {
    "id": 2,
    "image": "img/homeImg2.jpg",
    "subtitle": "Enjoy the finest coffee drinks.",
    "title": "Enjoy our exclusive <br>Coffee and Cocktails"
  },
  {
    "id": 3,
    "image": "img/homeImg3.jpg",
    "subtitle": "Making our coffee with love.",
    "title": "Alluring and Fragrant <br>Coffee Aroma"
  }
]

for(let i = 0; i< bannerSliderObj.length; i++){
  const bannerSlider = document.getElementById('bannerSlider');
  const child = document.createElement('div');
  child.classList.add('sliderItem', 'swiper-slide');
  child.innerHTML = 
  `<img src="${bannerSliderObj[i].image}" alt="Home image-${bannerSliderObj[i].id}" class="home-img">
  <div class="home-details">
      <div class="home-text">
          <h4 class="homeSubtitle">${bannerSliderObj[i].subtitle}</h4>
          <h2 class="homeTitle">${bannerSliderObj[i].title}</h2>
      </div>
      <button class="button">Explore</button>
  </div>`;
  bannerSlider.appendChild(child);
}

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

  sections.forEach((section) => {
    let current = section.getAttribute('id');
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    if(window.pageYOffset > sectionTop && window.pageYOffset <= sectionTop + sectionHeight){
     
    }
    else{
      
    }
  })
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