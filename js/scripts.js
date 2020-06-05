$(document).ready(function() {
    $("form#favoriteSeason").submit(function(event) {
        const season = $("#season").val();

        if (season === "spring") {
            $("spring, .summer, .fall, .winter").hide();
            var x = document.createElement("IMG");
            x.setAttribute("src", "https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg");
            x.setAttribute("width", "304");
            x.setAttribute("height", "228");
            x.setAttribute("alt", "Springtime!");
            document.body.appendChild(x);
            $("#output").text("It sounds like you enjoy lovely weather! Coding may not be for you.");
        
        } else if (season === "summer") {
            $(".spring, .summer, .fall, .winter").hide();
            var x = document.createElement("IMG");
            x.setAttribute("src", "https://www.carrolltoncityschools.net/uploaded/photos/Sea_Summer.jpg");
            x.setAttribute("width", "304");
            x.setAttribute("height", "228");
            x.setAttribute("alt", "Summer!");
            document.body.appendChild(x);
            $("#output").text("It sounds like you enjoy hot weather! Coding may not be for you.");

        } else if (season === "fall") {
            $(".spring, .summer, .fall, .winter").hide();
            var x = document.createElement("IMG");
            x.setAttribute("src", "https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2019/09/1140-fall-foliage-in-monadnock-region.jpg");
            x.setAttribute("width", "304");
            x.setAttribute("height", "228");
            x.setAttribute("alt", "Fall!");
            document.body.appendChild(x);
            $("#output").text("Fall can be great! But I think that Ruby would be well suited for you!");

        } else {
            var x = document.createElement("IMG");
            $(".spring, .summer, .fall, .winter").hide();
            x.setAttribute("src", "https://www.woodstockvt.com/sites/default/files/styles/hero_x_large/public/media-images/snowmobiletrail.jpg");
            x.setAttribute("width", "304");
            x.setAttribute("height", "228");
            x.setAttribute("alt", "Winter!");
            document.body.appendChild(x);
            $("#output").text("Coding is probably right up your alley. I would begin with Python!");
        }
        event.preventDefault();3
    })
});