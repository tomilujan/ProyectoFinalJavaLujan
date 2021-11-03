$("#titulo").animate({fontSize: "40px"},3000).delay(2000);

$(document).ready(function () {
    //---------SCROLL ANIMADO-----------
    //1° USO UN SELECTOR PARA LLAMAR AL BOTON O ENLACE QUE QUIERO USAR Y LE ASOCIO EL EVENTO CLICK
    $("#Contacto").click(function (e) {
        //PREVENGO EL COMPORTAMIENTO POR DEFECTO
        e.preventDefault();
        //AGREGO EL METODO ANIMATE    
        $('html, body').animate({
            //2° ANIMO LA PROPIEDAD scrollTop POSICIONANDOLO EN EL BORDE DE contenidoContacto
            scrollTop: $("#contenidoContacto").offset().top  
            //3° DEFINO UN TIEMPO DE DOS SEGUNDOS PARA LA ANIMACION
        }, 1000);        
    })
    //1° USO UN SELECTOR PARA LLAMAR AL BOTON O ENLACE QUE QUIERO USAR Y LE ASOCIO EL EVENTO CLICK
    $("#arriba").click(function (e) {
        e.preventDefault();        
        $('html, body').animate({
            //2° ANIMO LA PROPIEDAD scrollTop POSICIONANDOLO EN EL BORDE DE contenidoContacto
            scrollTop: $(".logo").offset().top 
            //3° DEFINO UN TIEMPO DE DOS SEGUNDOS PARA LA ANIMACION 
        }, 1000);        
    })


});