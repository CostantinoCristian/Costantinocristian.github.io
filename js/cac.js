$(document).ready(function(){
    // Inicializar PrettyPhoto para los enlaces con el atributo rel="prettyPhoto"
    $("a[rel^='prettyPhoto']").prettyPhoto({
        theme: 'dark_rounded',  // Tema de PrettyPhoto
        social_tools: false,    // Deshabilitar herramientas sociales
        deeplinking: false,     // Desactivar deeplinking
        overlay_gallery: true  // Desactivar galería en overlay si lo prefieres
    });
});