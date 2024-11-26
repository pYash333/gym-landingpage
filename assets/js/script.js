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
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false
          },
        },
      ],
    });
  }
});
