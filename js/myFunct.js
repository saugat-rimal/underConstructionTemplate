$( document ).ready(function() {
    $("#window").draggable();
    $("#window").resizable();
    $("div.yellow").click(function(){
    	$("#window").addClass("animated lightSpeedOut");
    });
    $("div.red").click(function(){
        $("#window").hide("slow");
    });
    $("div.green").click(function(){
      if ($("#window").hasClass("maximaze")){
       $("#window").removeClass("maximaze");
      } else {
        $("#window").addClass("maximaze");
      }
    });
    
    $(".buttonMen").hover(function(){
        $(".uiIco").show();
}, function(){
    $(".uiIco").hide();
}
);

});

