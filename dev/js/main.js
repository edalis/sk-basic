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

});

/**!
 * Browser Update
 * https://github.com/browser-update/browser-update
 * https://browser-update.org/customize.html
 */
var $buoop = {
    vs: {i:10,f:-4,o:-4,s:8,c:-4},
    api:4,
    l: 'ru',
};

function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
};

try {document.addEventListener("DOMContentLoaded", $buo_f, false)}
catch(e) {window.attachEvent("onload", $buo_f)}
