document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded before executing any JavaScript

    // Find the "Learn More" button by its class name
    var learnMoreButton = document.querySelector('.button');

    // Add a click event listener to the button
    learnMoreButton.addEventListener('click', function() {
        // Change the text color of the paragraph inside the main content
        var mainContentParagraph = document.querySelector('.main-content p');
        mainContentParagraph.style.color = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
