$(function () {
  if ($(".about-us").length > 0) {
    $(".about-us .aboutus-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      centerMode: false,
      focusOnSelect: true,
      infinite: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: false,
          },
        },
      ],
    });
  }

  if (window.matchMedia("(max-width: 767px)").matches) {
    if ($(".membership-section").length > 0) {
      $(".membership-section .membership-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        loop: true,
      });
    }
  }
  if (window.matchMedia("(max-width: 991px)").matches) {
    if ($(".staff-section").length > 0) {
      $(".staff-section .staff-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        loop: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            },
          },
        ],
      });
    }
  }
});
