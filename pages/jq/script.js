$(document).ready(function(){
    $(".M-btn-slide").click(function(){
        $("#M-panel").slideToggle("medium");
        $(this).toggleClass("active");
    });
});
$(document).ready(function(){
    $(".C-btn-slide").click(function(){
        $("#C-panel").slideToggle("medium");
        $(this).toggleClass("active");
    });
});


$(document).ready(function(){
    $(".run").click(function(){
        $("#box").animate({
	      width: [ "toggle", "swing" ], // ширина элемента
	      height: [ "toggle", "swing" ], // высота элемента
	      opacity: "toggle" // прозрачность элемента
	    }, 1500, "linear"); // продолжительность и скорость анимации
    }); 
});