// Select the elements to display countdown
const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#second');

// Function to update countdown
function updateCountdown() {
    // Get current date and time
    let now = new Date().getTime();

    // Calculate the distance between now and the countdown date
    let distance = countDownDate - now;

    // Check if the countdown is over
    if (distance <= 0) {
        clearInterval(x); // Clear the interval if countdown is expired
        document.getElementById("countdown").innerHTML = "EXPIRED";
        return;
    }

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

// Set the date we're counting down to
let countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 10);

// Update the countdown every second
let x = setInterval(updateCountdown, 1000);

// Call updateCountdown once initially to avoid delay in displaying the countdown
updateCountdown();
