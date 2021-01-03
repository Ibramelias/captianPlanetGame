$(document).ready(function () {


    var captain = $(".captain")

    var audioElement = document.createElement("audio");

    audioElement.setAttribute("src", "assets/mp3/captainplanet24.mp3");




    $(".btn-play").on("click", function () {
        audioElement.play()
    })

    $(".btn-pause").on("click", function () {
        audioElement.pause()
    })



    $(".btn-normal").on("click", function () {
        captain.animate({ height: "300px" });
    })

    $(".btn-grow").on("click", function () {
        captain.animate({ height: "500px" });
    })

    $(".btn-shrink").on("click", function () {
        captain.animate({ height: "100px" });
    })


    $(".btn-visible").on("click", function () {
        captain.animate({ opacity: "1" });
    })

    $(".btn-invisible").on("click", function () {
        captain.animate({ opacity: "0.5" });
    })








    $(".btn-left").on("click", function () {
        captain.animate({ left: "-=200px" }, "normal");
        console.log("hi")
    })
    $(".btn-right").on("click", function () {
        captain.animate({ left: "+=200px" }, "normal");
    })
    $(".btn-up").on("click", function () {
        captain.animate({ top: "-=200px" }, "normal");
    })
    $(".btn-down").on("click", function () {
        captain.animate({ top: "+=200px" }, "normal");
    })
    $(".btn-go").on("click", function () {
        captain.animate({ top: "50px", left: "80px", height: "300px" , opacity: "1" }, "fast");
    })





    $(document).keyup(function (e) {
        switch (e.which) {

            // Move Buttons (Keyboard Down)
            case 40:
                captain.animate({ top: "+=200px" }, "normal");
                break;

            // Move Buttons (Keyboard Right)
            case 39:
                captain.animate({ left: "+=200px" }, "normal");
                break;

            // Move Buttons (Keyboard Up)
            case 38:
                captain.animate({ top: "-=200px" }, "normal");
                break;

            // Move Buttons (Keyboard Left)
            case 37:
                captain.animate({ left: "-=200px" }, "btn-normal");
                break;

            default:
                break;
        }
    });
})