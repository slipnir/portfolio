// smooth scroll
    $('.scroll').click(function (e) {

        if (this.hash !== '') {
            e.preventDefault();

            var urlNum = this.hash;

            $('html, body').animate({
                scrollTop: $(urlNum).offset().top
            }, 800, function () {
                window.location.hash = urlNum;
            });
        }
    });
// end smooth scroll

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        navContainer: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items:1,
                nav: true
            },
            600: {
                items:3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    });
});


