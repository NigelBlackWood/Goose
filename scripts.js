// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for "Write New Story" button click
    var writeStoryBtn = document.getElementById('write-story-btn');
    if (writeStoryBtn) {
        writeStoryBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior (e.g., following a link)
            
            // Redirect to the "write-story.html" page
            window.location.href = 'write-story.html';
        });
    }

    // Add other JavaScript code for your website here...
});


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

