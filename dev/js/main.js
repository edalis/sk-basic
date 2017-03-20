jQuery(document).ready(function($) {

    $('img, a').on('dragstart', function(event) { event.preventDefault(); });

    /*! Scroll Top Button */
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $('.scroll-top').fadeIn('slow');
        } else {
            $('.scroll-top').fadeOut('slow');
        }
    });

    $('.scroll-top').on('click', function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });

    /*! Upgrade Browser */
    $('.upgrade-browser__close').on('click', function() {
        $('.upgrade-browser').fadeOut('slow');
    });

});
