// JavaScript to make each child of .pest-grid ( you can change the grid box class to other )
document.querySelectorAll('.pest-grid > *').forEach(function(box) {
    // Find the anchor tag (link) inside each box
    var link = box.querySelector('a');

    if (link) {
        // Make the whole box clickable
        box.style.cursor = 'pointer';

        // Add click event listener to the entire box
        box.addEventListener('click', function() {
            window.location.href = link.href; // Redirect to the link's URL
        });

        // Prevent double click on the inner link from conflicting
        box.querySelectorAll('a').forEach(function(anchor) {
            anchor.addEventListener('click', function(event) {
                event.stopPropagation(); // Stop the event from bubbling up to the box
            });
        });
    }
});
