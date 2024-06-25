// Function to start the countdown timer
function startCountdown() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('second');

    // Retrieve the countdown date from localStorage, or set a new one if it doesn't exist
    let countDownDate = localStorage.getItem('countDownDate');
    if (!countDownDate) {
        countDownDate = new Date().getTime() + 10 * 24 * 60 * 60 * 1000; // Example: 10 days from now
        localStorage.setItem('countDownDate', countDownDate);
    }

    // Update the countdown every second
    let x = setInterval(function () {
        // Get current date and time in milliseconds
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the HTML elements
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

        // If the countdown is over, clear the interval
        if (distance <= 0) {
            clearInterval(x);
            daysElement.textContent = '0';
            hoursElement.textContent = '0';
            minutesElement.textContent = '0';
            secondsElement.textContent = '0';
            document.getElementById("countdown").innerHTML = "EXPIRED";
            localStorage.removeItem('countDownDate'); // Remove countdown date from localStorage
        }
    }, 1000); // Update every second
}

// Start the countdown when the page is loaded
window.onload = function () {
    startCountdown();
};
