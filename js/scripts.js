$(document).ready(function() {
    $("form#yourHorrorscope").submit(function(event) {
        const horrorscope = $("#horrorscope").val();
        

    if (horrorscope === "aries") {
        $("#output").text("Based on your responses, it looks as if you would excell at Ruby!");

    } else if (horrorscope === "taurus") {
        $("#output").text("Based on your responses, it looks as if you would excell at C Sharp!");

    } else if (horrorscope === "gemini") {
        $("#output").text("Based on your responses, it looks as if you would excell at Javascript!");

    } else if (horrorscope === "cancer") {
        $("#output").text("Based on your responses, it looks as if you would excell at Go!");

    } else if (horrorscope === "leo") {
        $("#output").text("Based on your responses, it looks as if you would excell at Python!");

    } else if (horrorscope === "virgo") {
        $("#output").text("Based on your responses, it looks as if you would excell at Rust!");

    } else if (horrorscope === "libra") {
        $("#output").text("Based on your responses, it looks as if you would excell at Swift!");

    } else if (horrorscope === "scorpio") {
        $("#output").text("Based on your responses, it looks as if you would excell at Go!");

    } else if (horrorscope === "sagittarius") {
        $("#output").text("Based on your responses, it looks as if you would excell at Javascript!");

    } else if (horrorscope === "capricorn") {
        $("#output").text("Based on your responses, it looks as if you would excell at C Sharp!");
        
    } else if (horrorscope === "aquarius") {
            $("#output").text("Based on your responses, it looks as if you would excell at Ruby!");

    } else {
        $("#output").text("Based on your responses, it looks as if you would excell at Python!");
        }
        event.preventDefault();
    });
});