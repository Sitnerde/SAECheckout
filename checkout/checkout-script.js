$(document).ready(function() {
    $('#pay-complete').on('click', function() {
        var consentVal = $('#consent:checked').val();
        var textInputs = $('input[type="text"]');
        var notFilledInput = false;
        var text;
        var message = $('#message');
        textInputs.each(function() {
            var content = $(this).val().trim();
            if (content === "" || content === undefined) {
                notFilledInput = true;
            }
        })
        if (consentVal) {
            text = "Die Bestellung war erfolgreich!"
            message.css('color', 'green');
            message.html(text);
        } else {
            text = "Bitte akzeptieren Sie die AGB."
            message.css('color', 'red');
            message.html(text);
        }
        if (notFilledInput) {
            text = "Mindestens ein Feld wurde nicht ausgefüllt.";
            message.css('color', 'red');
            message.html(text);
        }
    });
});
