$(document).ready(function() {
    $("form#favoriteSeason").submit(function(event) {
        const season = $("#season").val();

        if (season === "spring") {
            $("#output").text("Magic 8 ball says: You would enjoy Go!");
        
        } else if (season === "summer") {
            $("#output").text("It looks as though studying Rust is in your future!");

        } else if (season === "fall") {
            $("#output").text("Apparently based on your choices, you should already be efficient at Ruby!");

        } else {
            $("#output").text("Coding is probably right up your alley. I would begin with Python!");
        }

        event.preventDefault();
    });
});