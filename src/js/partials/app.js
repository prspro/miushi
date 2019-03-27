
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
        responsive: [
            {
                breakpoint: 991,
                settings: 
                {
                    arrows: false,
                }
            }
        ]  
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
        responsive: [
            {
                breakpoint: 991,
                settings: 
                {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ] 
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
        responsive: [
            {
                breakpoint: 991,
                settings: 
                {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]  
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
        responsive: [
            {
                breakpoint: 991,
                settings: 
                {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]  
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
        responsive: [
            {
                breakpoint: 991,
                settings: 
                {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]    
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
        responsive: [
            {
                breakpoint: 991,
                settings: 
                {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]  
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

    var accordeon;

    if ($(window).width() < 992) {
        accordeon = true
        $('.col .list').slideUp(0);
    } else {
        accordeon = false
        $('.col .list').slideDown(0);
    }

    var arr = [];
    arr.unshift(Apply(992));
    arr.unshift(Apply(992));

    $(window).resize(function() {
        accordeon = Apply(992);
        if (Allow(Apply(992))) {
            if ($(window).width() < 992) {
                //console.log(1111)
                $('.col .list').slideUp(0);
            } else {
                //console.log(2222)
                $('.col .list').slideDown(0);
            }
        }
    });

    $('.col .title').on('click', function(){
        if (accordeon) {
            //console.log(111111);
            $('.col .list').not($(this).next()).slideUp(500);
            $(this).next().slideToggle(500);
        }
    });
    
    function Apply (breakpoint) {
        if ($(window).width() < breakpoint) {
            //$('.col .list').slideUp(0);
            return true
        } else {
            //$('.col .list').slideDown(0);
            return false  
        }
    }

    function Allow (allow) {
        arr.unshift(allow);
        if (  (arr[0] && !arr[1]) || (!arr[0] && arr[1]) ) {
            return true
        } else {
            return false
        }
    }
    
    

});