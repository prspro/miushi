
$(document).ready(function(){
    $('.sale-carousel').slick({
        infinite: true,
        dots: true,
        dotsClass: 'custom-dots',
        arrows: true,
        prevArrow: '<div class="arrow arrow--left"></div>',
        nextArrow: '<div class="arrow arrow--right"></div>',
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,  
        //adaptiveHeight: true    
    });
});