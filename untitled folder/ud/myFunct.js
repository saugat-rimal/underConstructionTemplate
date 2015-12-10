$( document ).ready(function() {
    $("#window").draggable();
    $("#window").resizable();
    
    $("div.yellow").click(function(e){
    	$("#window").addClass("animated lightSpeedOut");
      $("#window").delay(1000).hide(0);
      $(".termIco").show("slow");
      e.stopPropagation();
    });
    
    $("div.red").click(function(){
        $("#window").hide("slow");
        $(".termIco").show("slow");
        
    });
    
    $("div.green").click(function(){
      if ($("#window").hasClass("maximaze")){
       $("#window").removeClass("maximaze");
      } else {
        $("#window").addClass("maximaze","slow");
      }
    });

    $(".buttonWrapper").hover(function(){
        $(".uiIco").show();
}, function(){
    $(".uiIco").hide();
}
);
   
  $(".termIco").click(function(){
      if ($("#window").hasClass("lightSpeedOut")){
       $("#window").removeClass("lightSpeedOut");
       $("#window").show();
       $("#window").addClass("lightSpeedIn");
       console.log("It Works!!");
      } else {
        $("#window").show("slow");
      }
    });


});

