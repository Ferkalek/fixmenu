(function($){
    jQuery.fn.minMenu = function(options){
        options = $.extend({
            heightFixMenu: 100,
            position:"fixed",
            top: 0,
            left: 0
        }, options);

        $(this).css({
            "position": options.position,
            "top": options.top,
            "left": options.left
        });

        var getObject = $(this).selector;

        $(window).scroll(function(){
            if ( $(this).scrollTop() > options.heightFixMenu){
                $(getObject).addClass('min-header');
            } else {
                $(getObject).removeClass('min-header');
            }
        });
    };
})(jQuery);