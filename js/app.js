$(document).ready(function(){

    $('header').minMenu({
        heightFixMenu: 90
    });

    //если не использовать плагин
    /*var header = $('header');
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100){
            header.addClass('min-header');
        } else {
            header.removeClass('min-header');
        }
    });*/
    
});