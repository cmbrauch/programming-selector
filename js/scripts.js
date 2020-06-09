$(document).ready(function() {
    $("form#yourHorrorscope").submit(function(event) {
        const horrorscope = $("#horrorscope").val();
        

    if (horrorscope === "aries") {
        $("#output").text("Based on your response, it looks as if you should consider: Ruby, Javascript, Python, or Go!");

    } else if (horrorscope === "taurus") {
        $("#output").text("Based on your response, it looks as if you should consider: Javascript, Go, Python, or Ruby!");

    } else if (horrorscope === "gemini") {
        $("#output").text("Based on your response, it looks as if you should consider: Ruby, Javascript, Python, or Go!");

    } else if (horrorscope === "cancer") {
        $("#output").text("Based on your response, it looks as if you should consider: Javascript, Go, Python, or Ruby!");

    } else if (horrorscope === "leo") {
        $("#output").text("Based on your response, it looks as if you should consider: Ruby, Javascript, Python, or Go!");

    } else if (horrorscope === "virgo") {
        $("#output").text("Based on your response, it looks as if you should consider: Javascript, Go, Python, or Ruby!");

    } else if (horrorscope === "libra") {
        $("#output").text("Based on your response, it looks as if should consider: Ruby, Javascript, Python, or Go!");

    } else if (horrorscope === "scorpio") {
        $("#output").text("Based on your response, it looks as if you should consider: Javascript, Go, Python, or Ruby!");

    } else if (horrorscope === "sagittarius") {
        $("#output").text("Based on your response, it looks as if you should consider: Ruby, Javascript, Python, or Go!");

    } else if (horrorscope === "capricorn") {
        $("#output").text("Based on your response, it looks as if you should consider: Javascript, Go, Python, or Ruby!");
        
    } else if (horrorscope === "aquarius") {
        $("#output").text("Based on your response, it looks as if you should consider: Ruby, Javascript, Python, or Go!");

    } else {
        $("#output").text("Based on your response, it looks as if you should consider: Javascript, Go, Python, or Ruby!");
        }
        event.preventDefault();
    });
});

$(document).ready(function() {
    $("form#favoriteSeason").submit(function(event) {
        const season = $("#season").val();

        if (season === "spring") {
            $("#input").text("Springtime, eh? Definitely Python or Javascript.");
        
        } else if (season === "summer") {
            $("#input").text("It sounds like you enjoy hot weather! Coding may not be for you. But you can always consider Python or Javascript");

        } else if (season === "fall") {
            $("#input").text("Fall can be great! Javascript or Python!");

        } else {
            $("#input").text("Coding is probably right up your alley if you enjoy Winter. I would begin with Javascript or Python!");
        }
        event.preventDefault();
    });
});

$(document).ready(function() {
    $("form#finalQuestion").submit(function(event) {
        const question = $("#question").val();

        if (question === "sunrises") {
            $("#exput").text("You must love staying up all night! Trying to figure out Javascript is just for you!");
        
        } else if (question === "sunsets") {
            $("#exput").text("There's nothing like a sunset when you're coding Python!");

        } else {
            $("#exput").text("Surely you like one more than the other! Try again!");
        }
        event.preventDefault();
    });
});


$(document).ready(function() {
    $(".clickable").click(function() {
      $("#season-showing").fadeToggle();
      $("#season-hiding").fadeToggle();
    });
  });

$(document).ready(function() {
    $(".clickable").click(function() {
      $("#final-showing").fadeToggle();
      $("#final-hiding").fadeToggle();
    });
  });

  

  

