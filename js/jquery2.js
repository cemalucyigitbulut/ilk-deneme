$(".checkbox").on("click",function(){
    if($( "body" ).hasClass("darkMode")){
        $( "body" ).removeClass("darkMode");
        $(".textspann").text("Off");}
    else{
        $( "body" ).addClass("darkMode");
        $(".textspann").text("On");
    }
});


