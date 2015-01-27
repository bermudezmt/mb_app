$(document).ready(function() {
    var text_max = 140;
    $('#postcount').html(text_max + ' characters remaining');

    $('#micropost_content').keyup(function() {
        var text_length = $('#micropost_content').val().length;
        var text_remaining = text_max - text_length;

        $('#postcount').html(text_remaining + ' characters remaining');
    });
});