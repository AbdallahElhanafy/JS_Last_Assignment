$(document).ready(function(){
    $("#openNav").click(function(){
        $("#mySidenav").css("width", "250px");
    });

    $("#closeNav").click(function(){
        $("#mySidenav").css("width", "0");

    });

    $('.itemHead').click(function () {
        $(this).next('.itemInfo').slideToggle("slow");

    })

    $("#mySidenav a").click(function(event){
        event.preventDefault();
        var sectionId = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(sectionId).offset().top
        }, 2000, function() {
            $("body").css("overflow", "auto"); 
        });
    });


    $('#message').keyup(function() {
        var textLength = $(this).val().length;
        var textRemaining = 100 - textLength;

        $('#remainingChars').text(textRemaining);
    });

    var targetDate = new Date("Dec 31, 2024 23:59:59").getTime();

    var countdownTimer = setInterval(function() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        if (distance < 0) {
            clearInterval(countdownTimer);
            $("#countdown").text("Time's up!");
        }
    }, 1000);
});


