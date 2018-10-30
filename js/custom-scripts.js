$(window).ready(function() {

    //-- loading page --//

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 900);
    }, 300);

    //-- burger --//

    $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('nav ul').toggleClass('active');
    });

    while($('nav ul').hasClass('active')) {
        $('.wrapper').css('height', '100%');
    }

    //-- phone number --//

    if($(window).width() <= 768) {
        $('header .phone-number').appendTo('nav ul');
    }

    $(window).resize(function() {
        if($(window).width() <= 768) {
            $('header .phone-number').appendTo('nav ul');
        } else {
            $('nav .phone-number').prependTo('header .phone-area');
        }
    });

    //-- light anchor --//

    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - $('header').height()}, 700);
        if($(window).width() < 993) {
            $('nav ul').removeClass('active');
            $('.burger').toggleClass('fa-close fa-bars');
        }
    });

    //- modal window "call" -//

    $('.get-modal-call').click(function () {
        $('.modal-call').fadeIn(400).css('display', 'flex');
    });

    $('.modal-call').click(function (event) {
        var clickedElement = event.target;
        if (!$(clickedElement).closest('.modal-inner').length) {
            $('.modal-call').fadeOut(400);
        }
        if ($(clickedElement).hasClass('close-modal')) {
            $('.modal-call').fadeOut(400);
        }
    });

    //-- modal window "more" --//

    $('.get-modal-more').click(function () {
        $('.modal-more').fadeIn(400).css('display', 'flex');
    });

    $('.modal-more').click(function (event) {
        var clickedElement = event.target;
        if (!$(clickedElement).closest('.modal-inner').length) {
            $('.modal-more').fadeOut(400);
        }
        if ($(clickedElement).hasClass('close-modal')) {
            $('.modal-more').fadeOut(400);
        }
    });

});