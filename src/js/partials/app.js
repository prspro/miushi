
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
    const bpTablet = 992;
    var arr = [];
    arr.unshift(Apply(bpTablet));
    arr.unshift(Apply(bpTablet));

    //
    if ($(window).width() < bpTablet) {
        accordeon = true
        $('.col .list').slideUp(0);
    } else {
        accordeon = false
        $('.col .list').slideDown(0);
    }

    $(window).resize(function() {
        accordeon = Apply(bpTablet);
        if (Allow(Apply(bpTablet))) {
            if ($(window).width() < bpTablet) {
                $('.col .list').slideUp(0);
            } else {
                $('.col .list').slideDown(0);
            }
        }
    });

    $('.col .title').on('click', function(){
        if (accordeon) {
            $('.col .list').not($(this).next()).slideUp(500);
            $(this).next().slideToggle(500);
            $('.col .title').not($(this)).removeClass("unwrapped");
            $(this).toggleClass("unwrapped");
        }
    });
    
    function Apply (breakpoint) {
        if ($(window).width() < breakpoint) {
            return true
        } else {
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