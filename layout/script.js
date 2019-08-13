$(window).scroll(function () {

   var scrollWindow = $(window).scrollTop();

   console.log(scrollWindow);

   var heightWindow = $(window).height();
   var footerPosition = $(".footer").offset().top;

   if (scrollWindow + heightWindow >= footerPosition) {
       $('.js-main-block').addClass('js-main-block--scroll')
    }

    else {
       $('.js-main-block').removeClass('js-main-block--scroll')
    }
});
