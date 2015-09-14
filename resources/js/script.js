$(document).ready(function() {
    var xMark = "x",
        oMark = "o",
        turns = 0;
        spot1 = $("#spot-1"),
        spot2 = $("#spot-2"),
        spot3 = $("#spot-3"),
        spot4 = $("#spot-4"),
        spot5 = $("#spot-5"),
        spot6 = $("#spot-6"),
        spot7 = $("#spot-7"),
        spot8 = $("#spot-8"),
        spot9 = $("#spot-9"),
        pMessage = $("#message");
    
    // A.I's first move
    spot5.text("x").addClass("x-mark");
    
    // Game event handler
    $("#board li").on("click", function() {
        if (!checkEndGame()) {
            if ($(this).hasClass("o-mark") || $(this).hasClass("x-mark")) {
                pMessage.text("This spot is already taken! Please choose a different one.");
            } else if (turns % 2 == 0) {
                // Player move
                pMessage.text("");
                turns++;
                $(this).text("o").addClass("o-mark");
                if (checkEndGame() == true) {
                    turns = 1;
                }
            } else {
                // AI move
                pMessage.text("");
                $(this).text("x").addClass("x-mark");
                turns++;
                if (checkEndGame() == true) {
                    turns = 1;
                }                
            }
        }
    });
    
    // Reset button handler
    $("#reset-btn").on("click", function() {
        $("#board li").text("").removeClass("o-mark x-mark");
        spot5.text("x").addClass("x-mark");
        turns = 0;
        pMessage.text("New game started!");
    });
    
    /* ---------------------------------------- */
    /* FUNCTION DEFINITIONS */
    /* ---------------------------------------- */
    
    function checkEndGame() {
        gameEnded = false;
        
        if (spot1.hasClass("o-mark") && spot2.hasClass("o-mark") && spot3.hasClass("o-mark") ||
            spot4.hasClass("o-mark") && spot5.hasClass("o-mark") && spot6.hasClass("o-mark") ||
            spot7.hasClass("o-mark") && spot8.hasClass("o-mark") && spot9.hasClass("o-mark") ||
            spot1.hasClass("o-mark") && spot4.hasClass("o-mark") && spot7.hasClass("o-mark") ||
            spot2.hasClass("o-mark") && spot5.hasClass("o-mark") && spot8.hasClass("o-mark") ||
            spot3.hasClass("o-mark") && spot6.hasClass("o-mark") && spot9.hasClass("o-mark") ||
            spot1.hasClass("o-mark") && spot5.hasClass("o-mark") && spot9.hasClass("o-mark") ||
            spot3.hasClass("o-mark") && spot5.hasClass("o-mark") && spot7.hasClass("o-mark")) {
                pMessage.text("Winner: Player O");
                $("#board li").text("").removeClass("o-mark x-mark");
                gameEnded = true;
        } else if (spot1.hasClass("x-mark") && spot2.hasClass("x-mark") && spot3.hasClass("x-mark") ||
            spot4.hasClass("x-mark") && spot5.hasClass("x-mark") && spot6.hasClass("x-mark") ||
            spot7.hasClass("x-mark") && spot8.hasClass("x-mark") && spot9.hasClass("x-mark") ||
            spot1.hasClass("x-mark") && spot4.hasClass("x-mark") && spot7.hasClass("x-mark") ||
            spot2.hasClass("x-mark") && spot5.hasClass("x-mark") && spot8.hasClass("x-mark") ||
            spot3.hasClass("x-mark") && spot6.hasClass("x-mark") && spot9.hasClass("x-mark") ||
            spot1.hasClass("x-mark") && spot5.hasClass("x-mark") && spot9.hasClass("x-mark") ||
            spot3.hasClass("x-mark") && spot5.hasClass("x-mark") && spot7.hasClass("x-mark")) {
                pMessage.text("Winner: Player X");
                $("#board li").text("").removeClass("o-mark x-mark");   
                gameEnded = true;
        } else if (turns == 9) {
            pMessage.text("Tied game!");
            $("#board li").text("").removeClass("o-mark x-mark");
            gameEnded = true;
        }
        
        return gameEnded;
    }
});