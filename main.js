function login(){
    player1username=document.getElementById("player1_name").value;
    player2username=document.getElementById("player2_name").value;
    localStorage.setItem("Player 1 username",player1username);
    localStorage.setItem("Player 2 username",player2username);
    window.location="game.html";
}
function send(){
answerturn="Answer Turn-" + player1username;
}