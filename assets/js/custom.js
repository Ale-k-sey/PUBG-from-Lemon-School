var nav = $('.language-title');
    var selection = $('.language-list');
    var select = selection.find('li');

    nav.click(function(event) {
        if (nav.hasClass('active')) {
            nav.removeClass('active');
            selection.stop().slideUp(200);
        } else {
            nav.addClass('active');
            selection.stop().slideDown(200);
        }
        event.preventDefault();
    });

    select.click(function(event) {
        select.removeClass('active');
        $(this).addClass('active');
        var $lang = $(this).text();
        nav.text($lang);
        nav.trigger('click');
        //alert($lang);
        // alert ("location.href = 'index.php?lang=" + $(this).attr('data-value'));
    });