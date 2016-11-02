$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name= food"' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 800);
    return false;
});