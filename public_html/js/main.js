$(document).ready(function () {

    function changeNavColor() {

        if ($(window).scrollTop() === 0) {

            /*$("#mainNav").stop().animate({
                backgroundColor: 'transparent',
            })
            $("#mainNav").find('a').stop().animate({
                color: 'white',
            })*/
            $('#mainNav').addClass('navbar-dark');
            $('#mainNav').addClass('headerDark');
            $('#mainNav').removeClass('navbar-light');
            $('#mainNav').removeClass('bg-white');
        } else {
            /*$("#mainNav").stop().animate({
                backgroundColor: 'white',
            })
            $("#mainNav").find('a').stop().animate({
                color: 'black',
            })*/
            $('#mainNav').addClass('navbar-light');
            $('#mainNav').addClass('bg-white');
            $('#mainNav').removeClass('navbar-dark');
            $('#mainNav').removeClass('headerDark');
        }

    }

    $('img').map(function () {

        var img = $(this)

        var transformationMap = new Map()
        transformationMap.set("width", img.parent().width())

        const transformation = Object.fromEntries(transformationMap);

        $.ajax({
            type: "POST",
            url: "https://photuseretratus.pt/imagekitio/posturl",
            data: JSON.stringify({
                path: img.attr("alt"),
                transformation: transformation
            }),
            contentType: "application/json",
        }).done(function (data) {
            if (img.hasClass("backgroundImage")) {
                img.parent().css("background-image", "url(" + data + ')')
                img.remove();
            } else {
                img.attr("src", data)
            }
            img.width("100%")
        })

    })

    changeNavColor();

    $(document).scroll(function () {
        changeNavColor();
    })
   
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 7
    });
    
})

$(window).bind('load', function () {
    $("#loading").remove();
    $("#hiddenContent").css('visibility', 'visible');
});

