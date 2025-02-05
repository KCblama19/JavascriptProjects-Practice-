//let name1 = prompt("Enter Player 1 name");
//let name2 = prompt("Enter Player 2 name");


// Check if the page is being loaded for the first time in this session
if (!sessionStorage.getItem('loadedBefore')) {
    // If it's the first time in this session, set the flag in sessionStorage
    sessionStorage.setItem('loadedBefore', true);
} else {
// If it's not the first time, execute the JavaScript code

    // GET THE RANDOM NUMBERS &
    // CONVERT THE RANDOM NUMBERS FROM FLOAT TO DECIMAL 
    player1 = Math.floor(Math.random() * 6) + 1; // add 1 to get from 1 -6
    player2 = Math.floor(Math.random() * 6) + 1; //add 1 to get from 1 -6

    // randomly set a image for both players from dice1 - dice6.
    let imgSrc1 = "images/dice" + player1 + ".png"; // dice1.png - dice6.png
    let imgSrc2 = "images/dice" + player2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", imgSrc1);
    document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);

    // IF PLAYER 1 WINS
    if (player1 > player2)
    {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    } else if (player1 < player2) // IF PLAYER 2 WINS.
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    } else // When it is a draw.
    {
        document.querySelector("h1").innerHTML = "It is a draw";
    }
}