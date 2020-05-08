/**
 * The Amaizing Maze game
 */
(function () {
    "use strict";
var win = true;

$('document').ready(function () {
     // event that starts the game
    $("#start").click(
        function () {
            $("#status").text("Good Luck.");
            $("div .boundary").removeClass("youlose");
            startGame();

        });
});
    
    // function that starts the game

function startGame() {
    win = true;
    //fires an event on hover over the boundary area
    $(".boundary").hover(
        function () {
            loose();
        });
    //fires  an event when clicking end button
    $("#end").click(function () {
            if (win) {
                $("#status").text("You WIN! : Click S to Play Again");
                endGame();
            }
        });
    //fires  an event when leaving the maze boundary
    $("#maze").mouseleave(
        function () {
            loose();
        });

}
 /**
     * function that terminates the game
     */
function loose() {
    win = false;
    $("div .boundary").addClass("youlose");
    $("#status").text("You LOSE! : Click 'S' to Retry ");
}
 /**
     * function that ends the game
     */
function endGame() {
    $("div .boundary").removeClass("youlose");
    $('.boundary').unbind('hover');
    $("#maze").unbind('mouseleave');
}
})();
