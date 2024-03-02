// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for the "Write New Story" button
    var writeStoryBtn = document.getElementById('write-story-btn');
    if (writeStoryBtn) {
        writeStoryBtn.addEventListener('click', function() {
            // Redirect the user to the story submission page or display a modal
            // You can replace this with your own logic to show a story submission form
            console.log('Write New Story button clicked!');
        });
    }

