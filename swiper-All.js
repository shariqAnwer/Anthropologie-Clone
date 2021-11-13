var swiper1 = new Swiper('.swiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });