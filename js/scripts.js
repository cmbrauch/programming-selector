$(document).ready(function() {
    $("form#favoriteSeason").submit(function(event) {
        const season = $("#season").val();
        

        if (season === "spring") {
            $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.");
        
        } else if (season === "summer") {
            $("#output").text("It sounds like you enjoy hot weather! Coding may not be for you.");

        } else if (season === "fall") {
            $("#output").text("Fall can be great! But I think that Ruby would be well suited for you!");

        } else {
            $("#output").text("Coding is probably right up your alley. I would begin with Python!");
        }
    });
});
    
$(document).ready(function() {
    $("form#questions").submit(function(event) {
        const genre = $("#genre").val();

            if (genre === "comedy") {
                $("#output2").text("I think that you would enjoy C# as you would not stop laughing at how difficult it is!");
            
            } else if (genre === "suspense") {
                $("#output2").text("swift would be right up your alley!");
            
            } else {
                $("#output2").text("Actually, based on this, you should consider looking into French");
            }
        event.preventDefault();
    });
});