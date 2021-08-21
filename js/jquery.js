$(".checkbox").on("click",function(){
    if($( "#cembundlemode" ).hasClass("darkMode")){
        $( "#cembundlemode" ).removeClass("darkMode");
        $(".textspann").text("Off");}
    else{
        $( "#cembundlemode" ).addClass("darkMode");
        $(".textspann").text("On");
    }
});


// $(document).ready(function(){
// $("cembabadeneme").click(function(){
//     alert($("#cembundlemode").hasClass("darkMode"));
//   }); });