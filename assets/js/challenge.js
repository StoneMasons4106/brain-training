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
        $('#training-image').after('<section><div class="container-fluid"><div class="row"><div class="col"><h4 id="level-title" class="press-start">Level 3</h4></div></div></div></section>')
    } else if (level == 2) {
        $('#training-image').after('<section><div class="container-fluid"><div class="row"><div class="col"><h4 id="level-title" class="press-start">Level 2</h4></div></div></div></section>')
    } else if (level == 1) {
        $('#training-image').after('<section><div class="container-fluid"><div class="row"><div class="col"><h4 id="level-title" class="press-start">Level 1</h4></div></div></div></section>')
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