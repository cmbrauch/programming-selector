$(document).ready(function() {
    $("form#user_survey").submit(function(event){
        event.preventDefault();
        $("#horrorscope-responses").show();
        $("input:checkbox[name=horrorscope]:checked").each(function(){
          const zodiacClass = $(this).val();
          $('#horrorscope-responses').append(zodiacClass + "<br>");
        });
        $("#season-responses").show();
        $("input:checkbox[name=season]:checked").each(function(){
          const seasonMode = $(this).val();
          $('#season-responses').append(seasonMode + "<br>");
        });
        $("#genre-responses").show();
        $("input:checkbox[name=genre]:checked").each(function(){
          const genreMode = $(this).val();
          $('#genre-responses').append(genreMode + "<br>");
        });
        $("#pets-responses").show();
        $("input:checkbox[name=pets]:checked").each(function(){
          const petsMode = $(this).val();
          $('#pets-responses').append(petsMode + "<br>");
        });
        $("input:checkbox[name=iceCream]:checked").each(function(){
            const iceCreamMode = $(this).val();
            $('#icecream-responses').append(iceCreamMode + "<br>");
        });
      });
    
    
    
      $("form#user_survey").submit(function(event) { 
          let horrorscope = $("#horrorscope").val();
           
      if (horrorscope === "Aries") {
          $("#output").text("Based on your response, it looks as if you should consider: Ruby!");
    
      } else if (horrorscope === "Taurus" || "Gemini" || "Cancer") {
          $("#output").text("Based on your response, it looks as if you should consider: Javascript");
    
      } else if (horrorscope === "Leo" || "Virgo" || "Libra" || "Scorpio") {
          $("#output").text("Based on your response, it looks as if you should consider: Go");
    
      } else if (horrorscope === "Sagittarius" || "Capricorn" || "Aquarius") {
          $("#output").text("Based on your response, it looks as if you should consider: Python");
    
      } else {
          $("#output").text("Based on your response, it looks as if you should consider: Ruby!");
          }
         $('#user_survey').hide();
    });
});




  

  

