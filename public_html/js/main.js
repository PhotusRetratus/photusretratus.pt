$(document).ready(function () {

    $('img').map(function () {

        var img = $(this)

        var transformationMap = new Map()
        transformationMap.set("width", img.parent().width())

        const transformation = Object.fromEntries(transformationMap);

        $.ajax({
            type: "POST",
            url: "https://photuseretratus.pt/imagekitio/posturl",
            data: JSON.stringify({
                path: img.attr("src"),
                transformation: transformation
            }),
            contentType: "application/json",
        }).done(function (data) {
            img.attr("src", data)
        })

    })

    $(document).scroll(function () {

        if ($(window).scrollTop() === 0) {

            $("#mainNav").stop().animate({
                backgroundColor: 'transparent',
            })
            $("#mainNav").find('a').stop().animate({
                color: 'white',
            })
            $('.navbar-toggler').addClass('navbar-dark');
            $('.navbar-toggler').removeClass('navbar-light');
        } else {
            $("#mainNav").stop().animate({
                backgroundColor: 'white',
            })
            $("#mainNav").find('a').stop().animate({
                color: 'black',
            })
            $('.navbar-toggler').addClass('navbar-light');
            $('.navbar-toggler').removeClass('navbar-dark');
        }
    })

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav'
    })

})