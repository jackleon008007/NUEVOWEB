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

    $('.QuéofreceSocialDoc').click(function (){
        $('body,html').animate({
            scrollTop: '630px'
        });
    })
    $('.Precios').click(function (){
        $('body,html').animate({
            scrollTop: '2490px'
        });
    })
    $('.PorquéescogerSocialDoc ').click(function (){
        $('body,html').animate({
            scrollTop: '1650px'
        });
    })
    $('.Contáctanos').click(function (){
        $('body,html').animate({
            scrollTop: '4000px'
        });
    })
})
