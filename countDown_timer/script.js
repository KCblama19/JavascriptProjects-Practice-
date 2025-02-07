// Store the currentDate as an object
// currentDate = new Date();
// Store the targeted date to countdown
const targetDate = new Date('2025-02-10T08:00:00');

// Calculating the difference to make the countdown work
// const difference = targetDate - currentDate;

/**
 * The updateCountdown function
 * will calculate the time and
 * update our HTML elements accordingly
 */
function updateCountdown() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    // Finding the days, hours, minutes and seconds
    const days = Math.floor(difference/(1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) /
                            (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) /
                            (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Outputting the days, hours, minutes and seconds
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // Handling the countdown completion
    if(difference < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerText = "The event has started!";
    }
}


// Setting up an Interval
const interval = setInterval(updateCountdown, 1000);