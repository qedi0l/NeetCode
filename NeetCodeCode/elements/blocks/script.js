$(document).ready(function(){
    $(".switch-light").click(function(){
        $(this).toggleClass("active");
        $(".navigation").toggleClass("active");
        $(".page").toggleClass("active");
    });
});

