$(function () {
    $('.header button').on('click', function () {
        $('.header').toggleClass('on');
    });

    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    }); //메인 슬라이드

    $('.scroll_down a').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    })

    $('.tab_slide').slick({
        arrows: false,
    });

    $('.mainConcept .controller li:nth-child(1)').on('click', function () {
        $('.tab_concept_slide ul>li.on .tab_slide').slick('slickPrev');
    });
    $('.mainConcept .controller li:nth-child(2)').on('click', function () {
        $('.tab_concept_slide ul>li.on .tab_slide').slick('slickNext');
    });
    // 탭 슬라이드

    $('.tab_concept_menu ul>li button').on('click', function () {
        var idx = $(this).parent().index();
        console.log($(this).parent().index());
        $('.tab_concept_slide ul>li').removeClass('on');
        $('.tab_concept_slide ul>li').eq(idx).addClass('on');

        $('.tab_concept_menu ul>li').removeClass('on');
        $(this).parent().addClass('on');
    });
    // 메뉴버튼 클릭

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 1000) {
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });

    $('.to_top').on('click', function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 1000)
    });
    // totop button 작동
});