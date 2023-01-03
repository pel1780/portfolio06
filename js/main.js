$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    }); //메인 슬라이드

    $('.tab_slide').slick({
        arrows: false,
    }); // 탭 슬라이드

    $('.tab_concept_menu ul>li button').on('click', function () {
        var idx = $(this).parent().index();
        console.log($(this).parent().index());
        $('.tab_concept_slide ul>li').removeClass('on');
        $('.tab_concept_slide ul>li').eq(idx).addClass('on');

    })
})