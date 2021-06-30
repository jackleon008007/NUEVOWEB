jQuery('document').ready(function ($){
    var BotonMenu = $('.icono-menu'),
        menu = $('.nav ul');

    BotonMenu.click(function (){


        if(menu.hasClass('mostrar')){
            menu.removeClass('mostrar');
        }
        else{
            menu.addClass('mostrar');
        }
    });
});

$(document).ready(function (){
    $('.Inicio').click(function (){
        $('body,html').animate({
            scrollTop: '0px'
        });
    })

    $('.nuestrosServicios').click(function (){
        $('body,html').animate({
            scrollTop: '630px'
        });
    })
    $('.NuestroTrabajo').click(function (){
        $('body,html').animate({
            scrollTop: '2490px'
        });
    })
    $('.Contactanos').click(function (){
        $('body,html').animate({
            scrollTop: '4000px'
        });
    })
})
