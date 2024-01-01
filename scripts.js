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
        $('#posts').html('<h2>Latest Posts</h2><p>1. Sample Post 1</p><p>2. Sample Post 2</p><p>3. Sample Post 3</p>');
    }, 2000);
});




