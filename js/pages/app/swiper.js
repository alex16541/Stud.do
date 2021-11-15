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