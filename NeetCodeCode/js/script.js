$(document).ready(function(){
    $(".switch-light").click(function(){
        $(this).toggleClass("active");
        $(".gallery").toggleClass("active");
        $(".sw").toggleClass("active");
    });
});

