function postAJAX(urls, datas) {

    return $.ajax({
        type: "POST",
        url: "https://photuseretratus.pt/imagekitio/" + urls,
        data: datas,
        contentType: "application/json",
    })

}

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

function getIndexImagesUrl() {
    $('img').map(function () {

        var img = $(this)

        var transformationMap = new Map()

        transformationMap.set("width", img.parent().width())

        if (!img.hasClass("backgroundImage")) {
            transformationMap.set("width", img.parent().width() * 2)
        }

        img.attr("width", img.parent().width())
        const transformation = Object.fromEntries(transformationMap);
        let json = JSON.stringify({
            name: img.attr("name"),
            path: img.attr("path"),
            transformation: transformation
        })

        postAJAX(
            "getUrl",
            json,
        ).promise().done(function (data) {
            if (img.hasClass("backgroundImage")) {
                img.parent().css("background-image", "url(" + data + ')')
                img.remove();
            } else {
                img.attr("src", data)
            }
        })

    })
}

function getPortfolioImageUrl(div) {

    $("#Topics").find('img').map(function () {
        var img = $(this)

        var transformationMap = new Map()

        transformationMap.set("width", img.parent().width())

        img.attr("width", img.parent().width())
        const transformation = Object.fromEntries(transformationMap);
        let json = JSON.stringify({
            name: img.attr("name"),
            path: img.attr("path"),
            transformation: transformation
        })

        postAJAX(
            "getUrl",
            json,
        ).promise().done(function (data) {
            img.attr("src", data)
        })
    })


}

function generatePortfolioSection() {

    postAJAX(
        "generatePortfolioSection",
    ).promise().done(function (data) {
        $.each(data, function (i) {
            $("#Topics").append(
                '<div class="col-lg-6' +
                '" data-bs-toggle="modal" data-bs-target="#Modal" id=' + data[i] + '>' +
                '<div class="card bg-dark text-white">' +
                '<img class="card-img-top" path="/" name=' + data[i] + '>' +
                '<div class="card-img-overlay ">' +
                '<h2 class="position-absolute top-50 start-50 translate-middle card-title">' + data[i] + '</h2>' +
                '</div>' +
                '</div>' +
                '</div>'
            )
        })

        getPortfolioImageUrl($("#" + data));
    })

}

function indexLoading() {

    //generatePortfolioSection()
    getIndexImagesUrl();
    changeNavColor();

    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 7
    });

}

$(document).scroll(function () {
    changeNavColor();
})



$(document).ready(function () {

    indexLoading()

    var myModal = new bootstrap.Modal(document.getElementById('Modal'), {})

    $("#Estúdio").click(function () {
        myModal.show()
        $("#carouselNav").height($("#Carousel").height())
        $(window).resize(function () {
            location.reload();
        });
    })

    var myCarousel = document.querySelector('#Carousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: false
    })

    $("#carouselNav").find("li").click(function () {
        carousel.to($(this).attr("position"))
    })

    $(window).resize(function(){location.reload();});

})

$(window).bind('load', function () {

    $("#loading").remove();
    $("#hiddenContent").css('visibility', 'visible');

});