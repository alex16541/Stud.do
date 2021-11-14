let sid = document.querySelector('.sidebar');
let content = document.querySelector('.content');
let r = document.querySelector('.resize');

let curr_width = sid.offsetWidth;
let unlock = false;

document.addEventListener('mousemove', function(e) {
  let change = curr_width + (e.clientX - curr_width);
  if (unlock) {
    if (change > 99) {
      
      sid.style.width = change+'px';

      console.log(sid.style.width);
    }
    else if (change == 0) {
      
      sid.style.width = 0+'px';

      console.log(sid.style.width);
    }
    else {
        sid.style.width = '100px';

        console.log("else "+change);
    }
  }
});

r.addEventListener('mousedown', function(e) {
  curr_width = sid.offsetWidth;
  unlock = true;
});
document.addEventListener('mouseup', function(e) {
    curr_width = sid.offsetWidth;
    unlock = false;
  });

document.addEventListener('mousedown', function(e) {
  if (unlock) {
    e.preventDefault();
  }
});

/* Swiper */

const contentSwiper = new Swiper('.timetable-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  grabCursor: true,
  mousewheel: true,

});

const sidebarSwiper = new Swiper('.sidebar-swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: false,
  speed: 200,
  slidesPerView: 10,
  slidesPerGroup: 2,

  // And if we need scrollbar
  // freeMode:true,
  grabCursor: true,
  mousewheel: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});