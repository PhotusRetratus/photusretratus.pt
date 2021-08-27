$(document).ready(function () {

    $(document).scroll(function () {

        if ($(window).scrollTop() === 0) {
            $("#mainNav").stop().animate({
                backgroundColor: 'transparent',
            })
            $("#mainNav").find('a').stop().animate({
                color:'white',
            })
            $('.navbar-toggler').addClass('navbar-dark');
            $('.navbar-toggler').removeClass('navbar-light');
        }
        else{
            $("#mainNav").stop().animate({
                backgroundColor: 'white',
            })
            $("#mainNav").find('a').stop().animate({
                color:'black',
            })
            $('.navbar-toggler').addClass('navbar-light');
            $('.navbar-toggler').removeClass('navbar-dark');
        }
    })

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 48,
    })

})