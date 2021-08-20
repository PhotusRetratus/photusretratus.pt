$(document).ready(function () {

    import ImageKit from "imagekit-javascript"

    var imagekit = new ImageKit({
        publicKey: "public_TGL83sxiUWGZfYFL0MMz9r7AXTw=",
        urlEndpoint: "https://ik.imagekit.io/minecopre",
        authenticationEndpoint: "http://photuseretratus.pt/auth",
    });  

    var imageURL = imagekit.url({
        path: "/assets/header.jpg",
        urlEndpoint: urlEndpoint,
        transformation: [{
            "height": "300",
            "width": "400"
        }]
    });

    $(document).scroll(function () {

        imageURL();

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