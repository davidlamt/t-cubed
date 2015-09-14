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
                    turns = 0;
                }
                
                if (!checkEndGame()) {
                    // AI move
                    AImove();
                    if (checkEndGame() == true) {
                        turns = 0;
                    }                        
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
                gameEnded = true;
        } else if (turns == 8) {
            pMessage.text("Tied game!");
            gameEnded = true; 
        }
        
        return gameEnded;
    }
    
    function AImove() {
        if (turns == 1) {     
            if (!spot1.hasClass("o-mark") && !spot3.hasClass("o-mark") && !spot7.hasClass("o-mark") && !spot9.hasClass("o-mark")) {
                spot9.text("x").addClass("x-mark");
                turns++;
            } else {
                spot6.text("x").addClass("x-mark");
                turns++;
            }
        } else {            
            // Making a winning move
            if (spot1.hasClass("o-mark") && spot4.hasClass("o-mark") && !spot7.hasClass("x-mark")) {
                spot7.text("x").addClass("x-mark");
                turns++;                
            } else if (!spot1.hasClass("o-mark") && spot2.hasClass("x-mark") && spot3.hasClass("x-mark")) {
                spot1.text("x").addClass("x-mark");
                turns++;
            } else if (spot1.hasClass("x-mark") && spot2.hasClass("x-mark") && !spot3.hasClass("o-mark")) {
                spot3.text("x").addClass("x-mark");
                turns++;
            } else if (!spot4.hasClass("o-mark") && spot5.hasClass("x-mark") && spot6.hasClass("x-mark")) {
                spot4.text("x").addClass("x-mark");
                turns++;
            } else if (spot4.hasClass("x-mark") && spot5.hasClass("x-mark") && !spot6.hasClass("o-mark")) {
                spot6.text("x").addClass("x-mark");
                turns++;
            } else if (!spot7.hasClass("o-mark") && spot8.hasClass("x-mark") && spot9.hasClass("x-mark")) {
                spot7.text("x").addClass("x-mark");
                turns++;
            } else if (spot7.hasClass("x-mark") && spot8.hasClass("x-mark") && !spot9.hasClass("o-mark")) {
                spot9.text("x").addClass("x-mark");
                turns++;
            } else if (!spot1.hasClass("o-mark") && spot4.hasClass("x-mark") && spot7.hasClass("x-mark")) {
                spot1.text("x").addClass("x-mark");
                turns++;                
            } else if (spot1.hasClass("x-mark") && spot4.hasClass("x-mark") && !spot7.hasClass("o-mark")) {
                spot7.text("x").addClass("x-mark");
                turns++;                 
            } else if (!spot2.hasClass("o-mark") && spot5.hasClass("x-mark") && spot8.hasClass("x-mark")) {
                spot2.text("x").addClass("x-mark");
                turns++;                 
            } else if (spot2.hasClass("x-mark") && spot5.hasClass("x-mark") && !spot8.hasClass("o-mark")) {
                spot8.text("x").addClass("x-mark");
                turns++;                    
            } else if (!spot3.hasClass("o-mark") && spot6.hasClass("x-mark") && spot9.hasClass("x-mark")) {
                spot3.text("x").addClass("x-mark");
                turns++;                   
            } else if (spot3.hasClass("x-mark") && spot6.hasClass("x-mark") && !spot9.hasClass("o-mark")) {
                spot9.text("x").addClass("x-mark");
                turns++;                                   
            } else if (!spot1.hasClass("o-mark") && spot5.hasClass("x-mark") && spot9.hasClass("x-mark")) {
                spot1.text("x").addClass("x-mark");
                turns++;                    
            } else if (spot1.hasClass("x-mark") && spot5.hasClass("x-mark") && !spot9.hasClass("o-mark")) {
                spot9.text("x").addClass("x-mark");
                turns++;                      
            } else if (!spot3.hasClass("o-mark") && spot5.hasClass("x-mark") && spot7.hasClass("x-mark")) {
                spot3.text("x").addClass("x-mark");
                turns++;                       
            } else if (spot3.hasClass("x-mark") && spot5.hasClass("x-mark") && !spot7.hasClass("o-mark")) {
                spot7.text("x").addClass("x-mark");
                turns++;                        
            } 
                
            // Blocking the user from winning
            else if (!spot1.hasClass("x-mark") && spot2.hasClass("o-mark") && spot3.hasClass("o-mark")) {
                spot1.text("x").addClass("x-mark");
                turns++;                       
            } else if (spot1.hasClass("o-mark") && !spot2.hasClass("x-mark") && spot3.hasClass("o-mark")) {
                spot2.text("x").addClass("x-mark");
                turns++;                        
            } else if (spot1.hasClass("o-mark") && spot2.hasClass("o-mark") && !spot3.hasClass("x-mark")) {
                spot3.text("x").addClass("x-mark");
                turns++;                       
            } else if (!spot7.hasClass("x-mark") && spot8.hasClass("o-mark") && spot9.hasClass("o-mark")) {
                spot7.text("x").addClass("x-mark");
                turns++;                             
            } else if (spot7.hasClass("o-mark") && !spot8.hasClass("x-mark") && spot9.hasClass("o-mark")) {
                spot8.text("x").addClass("x-mark");
                turns++;                          
            } else if (spot7.hasClass("o-mark") && spot8.hasClass("o-mark") && !spot9.hasClass("x-mark")) {
                spot9.text("x").addClass("x-mark");
                turns++;                     
            } else if (!spot1.hasClass("x-mark") && spot4.hasClass("o-mark") && spot7.hasClass("o-mark")) {
                spot1.text("x").addClass("x-mark");
                turns++;                   
            } else if (spot1.hasClass("o-mark") && !spot4.hasClass("x-mark") && spot7.hasClass("o-mark")) {
                spot4.text("x").addClass("x-mark");
                turns++;                           
            } else if (spot1.hasClass("o-mark") && spot4.hasClass("o-mark") && !spot7.hasClass("x-mark")) {
                spot7.text("x").addClass("x-mark");
                turns++;                      
            } else if (!spot3.hasClass("x-mark") && spot6.hasClass("o-mark") && spot9.hasClass("o-mark")) {
                spot3.text("x").addClass("x-mark");
                turns++;                   
            } else if (spot3.hasClass("o-mark") && !spot6.hasClass("x-mark") && spot9.hasClass("o-mark")) {
                spot6.text("x").addClass("x-mark");
                turns++;                    
            } else if (spot3.hasClass("o-mark") && spot6.hasClass("o-mark") && !spot9.hasClass("x-mark")) {
                spot9.text("x").addClass("x-mark");
                turns++;                         
            }    
            
                // Trying default move if neither
                else {
                if (!spot1.hasClass("o-mark") && !spot1.hasClass("x-mark")) {
                    spot1.text("x").addClass("x-mark");
                    turns++;   
                } else if (!spot2.hasClass("o-mark") && !spot2.hasClass("x-mark")) {
                    spot2.text("x").addClass("x-mark");
                    turns++;   
                } else if (!spot3.hasClass("o-mark") && !spot3.hasClass("x-mark")) {
                    spot3.text("x").addClass("x-mark");
                    turns++;   
                } else if (!spot4.hasClass("o-mark") && !spot4.hasClass("x-mark")) {
                    spot4.text("x").addClass("x-mark");
                    turns++;   
                } else if (!spot5.hasClass("o-mark") && !spot5.hasClass("x-mark")) {
                    spot5.text("x").addClass("x-mark");
                    turns++;   
                } else if (!spot6.hasClass("o-mark") && !spot6.hasClass("x-mark")) {
                    spot6.text("x").addClass("x-mark");
                    turns++;   
                } else if (!spot7.hasClass("o-mark") && !spot7.hasClass("x-mark")) {
                    spot7.text("x").addClass("x-mark");
                    turns++;   
                } else if (!spot8.hasClass("o-mark") && !spot8.hasClass("x-mark")) {
                    spot8.text("x").addClass("x-mark");
                    turns++;   
                } else if (!spot9.hasClass("o-mark") && !spot9.hasClass("x-mark")) {
                    spot9.text("x").addClass("x-mark");
                    turns++;   
                }
            }
        }
    }
    
});