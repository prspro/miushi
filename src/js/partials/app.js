
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
    $('.sets-carousel').slick({
        infinite: true,
        dots: true,
        dotsClass: 'custom-dots',
        arrows: true,
        prevArrow: '<div class="arrow arrow--left"></div>',
        nextArrow: '<div class="arrow arrow--right"></div>',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,  
        //adaptiveHeight: true    
    });
    $('.rolls-carousel').slick({
        infinite: true,
        dots: true,
        dotsClass: 'custom-dots',
        arrows: true,
        prevArrow: '<div class="arrow arrow--left"></div>',
        nextArrow: '<div class="arrow arrow--right"></div>',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,  
        //adaptiveHeight: true    
    });
    $('.pizza-carousel').slick({
        infinite: true,
        dots: true,
        dotsClass: 'custom-dots',
        arrows: true,
        prevArrow: '<div class="arrow arrow--left"></div>',
        nextArrow: '<div class="arrow arrow--right"></div>',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,  
        //adaptiveHeight: true    
    });
    $('.wok-carousel').slick({
        infinite: true,
        dots: true,
        dotsClass: 'custom-dots',
        arrows: true,
        prevArrow: '<div class="arrow arrow--left"></div>',
        nextArrow: '<div class="arrow arrow--right"></div>',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,  
        //adaptiveHeight: true    
    });
    $('.new-stock-carousel').slick({
        infinite: true,
        dots: true,
        dotsClass: 'custom-dots',
        arrows: true,
        prevArrow: '<div class="arrow arrow--left"></div>',
        nextArrow: '<div class="arrow arrow--right"></div>',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,  
        //adaptiveHeight: true    
        //slickFilter: $('.slide--new')
    });
    $('.new-stock-carousel').slick('slickFilter', $('.slide--new'));

    $('.btn--news').on('click', function(){
        $('.new-stock-carousel').slick('slickUnfilter');   
        $('.new-stock-carousel').slick('slickFilter', $('.slide--new'));
        $('.btn--news')[0].classList.add('btn--active');
        $('.btn--stock')[0].classList.remove('btn--active');
    });
    $('.btn--stock').on('click', function(){
        $('.new-stock-carousel').slick('slickUnfilter');  
        $('.new-stock-carousel').slick('slickFilter', $('.slide--stock'));
        $('.btn--news')[0].classList.remove('btn--active');
        $('.btn--stock')[0].classList.add('btn--active');
    }); 
    //$('.btn').css("border-color", "red");
    //console.log($('.btn--news')[0].classList);
});