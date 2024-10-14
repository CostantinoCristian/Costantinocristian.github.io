$(document).ready(function(){
    // Inicializar PrettyPhoto para los enlaces con el atributo rel="prettyPhoto"
    $("a[rel^='prettyPhoto']").prettyPhoto({
        theme: 'facebook',
        social_tools: false,
        allow_resize: true,
    });
});