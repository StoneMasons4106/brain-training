$(document).ready(function () {
    var count = localStorage.getItem('count') || 0;
    var level = localStorage.getItem('level');
    var totalSeconds = 0;

    if (count % 2 === 0) {
        $('#darkmode-link').remove();
    } else {
        $(document.head).append('<link id="darkmode-link" href="assets/css/darkmode.css" rel="stylesheet" type="text/css">');
    }

    $('#darkmode-button, #darkmode-dropdown').click(function () {
        count = parseInt(count) + 1;
        if (count % 2 === 0) {
            $('#darkmode-link').remove();
            localStorage.setItem('count', count);
        } else {
            $(document.head).append('<link id="darkmode-link" href="assets/css/darkmode.css" rel="stylesheet" type="text/css">');
            localStorage.setItem('count', count);
        }
    })

    if (level == 3) {
        $('#training-image').after('<p>Level 3</p>')
    } else if (level == 2) {
        $('#training-image').after('<p>Level 2</p>')
    } else if (level == 1) {
        $('#training-image').after('<p>Level 1</p>')
    }

    setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        $('#seconds').html(pad(totalSeconds % 60));
        $('#minutes').html(pad(parseInt(totalSeconds / 60))); 
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        }
        else {
            return valString;
        }
    }
})