$(document).ready(function(){

    //AGREGAR ANIMACION A LOS ENLACES 
    $('.menu a').each(function(index, element){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    // AGREGAR ANIMACION AL TITULO
    if($(window).width() > 800){
        $('.title').css({
            opacity: 0,
            marginTop: 0
        });

        $('.title').animate({
            opacity: 1,
            marginTop: "-52px"
        }, 1500);
    }

    // GUARDANDO LOS BOTONES DE ENLACE EN VARIABLES
    var aboutUs = $('#about-us').offset().top,
        menu = $('#food-menu').offset().top,
        gallery = $('#gallery').offset().top,
        location = $('#location').offset().top;

    // AGREGANDO EFECTO DE SCROLL PARA CADA BOTON
    $('#btn-about-us').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: aboutUs
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });

    $('#btn-gallery').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: gallery
        }, 500);
    });

    $('#btn-location').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: location
        }, 500);
    });

    // EFECTO PARALAX
    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if (windowWidth > 800) {
            var scroll = $(window).scrollTop();

            //PARALAX DEL TITULO
            $('header .title').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            //PARLAX DEL ARTICULO
            $('.about-us article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    // FUNCION PARA REINICIAR EL EFECTO PARALAX EN PANTALLAS MENOS A 800PX DE ANCHO
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if (windowWidth < 800){
            $('.about-us article').css({
                'transform': 'translate(0px, 0px)'
            })
        }
    });

});