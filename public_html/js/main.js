$(document).ready(function () {


    $('img').map(function () {

        var img = $(this)

        var transformationMap = new Map()
        transformationMap.set("width", img.parent().width())

        const transformation = Object.fromEntries(transformationMap);

        $.ajax({
            type: "POST",
            url: "http://localhost/imagekitio/posturl",
            data: JSON.stringify({
                path: img.attr("alt"),
                transformation: transformation
            }),
            contentType: "application/json",
        }).done(function (data) {
            if(img.hasClass("backgroundImage")){
                img.parent().css("background-image","url(" + data +')')
                
                img.remove();
            }
            else
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

    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav'
    })

    $(window).on('load', function() {

        $("#loading").remove();
        $("#hiddenContent").css('visibility', 'visible');

    })

})