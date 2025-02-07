// Play the corresponding sound of the key that was pressed or click.
function playSound(buttonPressed) {

    switch (buttonPressed) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
            
        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        default:
            alert("Invalid drum key");
    }
}

function buttonAnimation(currentKey){
    let activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");

    setTimeout(() => {
        activebutton.classList.remove("pressed");
    }, 100);
}


let numOfdrums = document.querySelectorAll(".drum").length;
// Check for the drum that was click.
for(let i = 0; i < numOfdrums; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        this.style.color = "white";
        let drumInnerHTML = this.innerHTML;

        playSound(drumInnerHTML);  
        buttonAnimation(drumInnerHTML);
    });
} 
// Check for the key that was pressed.
document.addEventListener("keydown", function(event) {
    let key = event.key;
    playSound(key);
    buttonAnimation(key);
}); 