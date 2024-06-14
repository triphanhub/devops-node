// scripts.js

// Function to display a welcome alert
function welcomeAlert() {
    alert("Welcome to My Website!");
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    button.addEventListener("click", welcomeAlert);
});
