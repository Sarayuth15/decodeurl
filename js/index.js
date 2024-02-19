$(document).ready(function() {
    $('#decodeButton').click(function() {
        var inputUrl = $('#urlInput').val();
        
        try {
            // Check if decoding is necessary
            var decodedUrl = decodeURIComponent(inputUrl);
            
            if (decodedUrl === inputUrl) {
                alert('Not URL-encoded.');
            } else {
                // Display the decoded URL
                $('#decodedUrl').text(decodedUrl);
            }
        } catch (error) {
            // Handle invalid URL
            $('#decodedUrl').text('Invalid URL');
        }
    });
});