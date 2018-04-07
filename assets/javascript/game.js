/* Crystals Collector javascript psuedocode

// Initialize: win count, loss count, current random number, 
// all numbers added together, 4 random numbers for each crystal

// Make a function for:
// 1. when the game starts/restarts
// 2. when the player wins/loses the game
// 3. when the new number for crystal is generated
// 4. when the added up number equals the random number or if it goes above

*/

$(document).ready(function() {
    // Initializing variables
    var goalnumber = Math.floor(Math.random() * 101 + 19);
    $("#goal-number").text(goalnumber);

    var totalnumber = 0;
    var firstcrystal = crystalnumber();
    var secondcrystal = crystalnumber();
    var thirdcrystal = crystalnumber();
    var fourthcrystal = crystalnumber();
    var wincount = 0;
    var losscount = 0;

    // Function to give each crystal a random number between 1 through 12
    function crystalnumber() {
        return Math.floor(Math.random() * 11 + 1);
    }

    // Function to start/restart the game
    function startgame() {
        // Giving the variable goalnumber a number between 19 through 120
        goalnumber = Math.floor(Math.random() * 101 + 19);        
        // Putting that goalnumber on to html
        $("#goal-number").text(goalnumber);

        // Resetting total number
        totalnumber = 0;
        $("#total-number").text(totalnumber);

        // Generating random numbers 1 through 12 for each crystal and putting it on html
        firstcrystal = crystalnumber();
        secondcrystal = crystalnumber();
        thirdcrystal = crystalnumber();
        fourthcrystal = crystalnumber();

        // Updates message
        $("#message").text("Wow, you've won " + wincount + " game(s)... Impressive...");
    }

    // Function for when the player wins the game
    function win() {
        // wincount goes up by 1, and changes take place on html
        wincount++;
        $("#wins").text(wincount);
        $("#message").text("Congratulations, you won!");
    }

    // Function for when the player loses the game
    function lose() {
        // losscount goes up by 1, and changes take place on html
        losscount++;
        $("#losses").text(losscount);
        $("#message").text("Sorry, better luck next time!");
    }

    // Function for when the player clicks on one of the crystals
    function button(crystal) {
        // totalnumber goes up by crystal's value
        totalnumber = totalnumber + crystal;
        $("#total-number").text(totalnumber);

        // If else for checking whether the player wins/loses
        if (totalnumber === goalnumber) {
            win();
        }
        else if (totalnumber > goalnumber) {
            lose();
        }       
    }

    // When each crystal is clicked
    $("#crystal1").on("click", function() {
        // If totalnumber is greater than or equal to goalnumber, disable the button
        if (totalnumber === goalnumber) {
            $("#crystal1").prop("disabled", true);
        }
        else if (totalnumber > goalnumber) {
            $("#crystal1").prop("disabled", true);
        }
        // Otherwise, enable the button and run the button function
        else {
            $("#crystal1").prop("disabled", false);
            button(firstcrystal);            
        }
    })

    $("#crystal2").on("click", function() {
        // If totalnumber is greater than or equal to goalnumber, disable the button
        if (totalnumber === goalnumber) {
            $("#crystal1").prop("disabled", true);
        }
        else if (totalnumber > goalnumber) {
            $("#crystal1").prop("disabled", true);
        }
        // Otherwise, enable the button and run the button function
        else {
            $("#crystal1").prop("disabled", false);
            button(secondcrystal);            
        }
    })

    $("#crystal3").on("click", function() {
        // If totalnumber is greater than or equal to goalnumber, disable the button
        if (totalnumber === goalnumber) {
            $("#crystal1").prop("disabled", true);
        }
        else if (totalnumber > goalnumber) {
            $("#crystal1").prop("disabled", true);
        }
        // Otherwise, enable the button and run the button function
        else {
            $("#crystal1").prop("disabled", false);
            button(thirdcrystal);            
        }
    })

    $("#crystal4").on("click", function() {
        // If totalnumber is greater than or equal to goalnumber, disable the button
        if (totalnumber === goalnumber) {
            $("#crystal1").prop("disabled", true);
        }
        else if (totalnumber > goalnumber) {
            $("#crystal1").prop("disabled", true);
        }
        // Otherwise, enable the button and run the button function
        else {
            $("#crystal1").prop("disabled", false);
            button(fourthcrystal);            
        }
    })

    // Restart button
    $("#restart-button").on("click", function() {
        startgame();
    });

    // Rules Button
    var modal = $("#rules")
    $("#rules-button").on("click", function() {
        modal[0].style.display = "block";
    })
    $("#close-button").on("click", function() {
        modal[0].style.display = "none";
    })
})