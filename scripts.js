$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav a').click(function() {
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    // Load blog posts dynamically (replace this with your actual data loading logic)
    $('#posts').html('<h2>Loading...</h2>');
    setTimeout(function() {
        $('#posts').html('<h2>Latest Posts</h2><p><li><a href="post.html">किताब पढ्नुका १७ फाइदा</a></li></p>');
    }, 2000);
});

// script.js

$(document).ready(function () {
    // Sample comments
    var comments = [
        { name: "John Doe", content: "Great post!" },
        { name: "Jane Smith", content: "I learned a lot from this." }
    ];

    // Display existing comments
    displayComments(comments);

    // Handle comment form submission
    $("#commentForm").submit(function (event) {
        event.preventDefault();

        // Get values from the form
        var name = $("#commentName").val();
        var content = $("#commentContent").val();

        // Add the new comment to the comments array
        comments.push({ name: name, content: content });

        // Display the updated comments
        displayComments(comments);

        // Clear the form
        $("#commentName").val("");
        $("#commentContent").val("");
    });

    // Function to display comments
    function displayComments(comments) {
        // Clear the comments div
        $("#comments").empty();

        // Display each comment
        comments.forEach(function (comment) {
            var commentHtml = '<div class="comment"><strong>' + comment.name + ':</strong> ' + comment.content + '</div>';
            $("#comments").append(commentHtml);
        });
    }
});






