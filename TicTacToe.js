alert("Who starts? X or O?");
var x = prompt();
if (x != "X" && x != "O") {
    var b = false;
    while (!b) {
        alert("Unexcepected input. Enter again");
        x = prompt()
        if (x == "X" || x == "O")
            b = true;
    }
}
var currentP = x;
var gameBoard = ["", "", "", "", "", "", "", "", ""];
var combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var Oscore = 0;
var Xscore = 0;
function Win()
{
    for (var i = 0; i < 8; i++) {
        var arr = combos[i];
        if (gameBoard[arr[0]]!= "" && gameBoard[arr[0]] == gameBoard[arr[1]] && gameBoard[arr[1]] == gameBoard[arr[2]]) 
            return true;
    }
    return false;
}

function Tie() {
    for (var i = 0; i < 9; i++) {
        if (gameBoard[i] == "")
            return false;
    }
    return true;
}
function Restart() {
    currentP = x;
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    for (var i = 0; i <= 8; i++) {
        var td = document.getElementById(i);
        td.innerHTML = "";
    }
}
function Game(i) {
    var td = document.getElementById(i);
    if (gameBoard[i] != "") { return; }
    gameBoard[i] = currentP;
    td.innerHTML = currentP;
    if (Win()) {
        if (currentP == "X")
            Xscore++;
        else
            Oscore++;
        alert(currentP + " Won the match!");
        End();
        return;
    }
    else if (Tie()) {
        alert("Tie");
        End();
        return;
    }
    if (currentP == "X")
        currentP = "O";
    else
        currentP = "X";
}
function End() {
    alert("The end of the match. Want to continue play or end the game?");
    alert("0 for continue, any other input - end");
    var v = prompt();
    if (v != "0") {
        alert("The game ended. The score is: X - " + Xscore + ", O - " + Oscore);
        if (Xscore > Oscore)
            alert("X won the Game!");
        else if (Oscore > Xscore)
            alert("O won the Game!");
        else
            alert("Tie");
        var t = document.getElementById("tbl");
        t.setAttribute("style", "display:none;");
        document.write("Game Ended! Hit F5 to play again!");
        return;
    }
    else {
        alert("Game continued...");
        Restart();
    }
}