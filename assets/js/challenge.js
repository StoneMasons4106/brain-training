$(document).ready(function () {
    var count = localStorage.getItem('count') || 0;
    var level = localStorage.getItem('level');
    var totalSeconds = 0;
    var totalMoves = 0;
    var correctMoves = 0;
    var cardsFlipped = 0;

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
        $('#training-image').after('<section><div class="container-fluid"><div class="row"><div class="col"><h4 id="level-title" class="press-start">Level 3</h4></div></div></div></section>');
    } else if (level == 2) {
        $('#training-image').after('<section><div class="container-fluid"><div class="row"><div class="col"><h4 id="level-title" class="press-start">Level 2</h4></div></div></div></section>');
    } else if (level == 1) {
        $('#training-image').after('<section><div class="container-fluid"><div class="row"><div class="col"><h4 id="level-title" class="press-start">Level 1</h4></div></div></div></section><section><div class="container-fluid cards-section"><div class="row"><div class="col-lg-2" align="center"><div class="card" id="card-1"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-2"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-3"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-4"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-5"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-6"><div class="card-front"></div><div class="card-back"></div></div></div></div><div class="row"><div class="col-lg-2" align="center"><div class="card" id="card-7"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-8"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-9"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-10"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-11"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-12"><div class="card-front"></div><div class="card-back"></div></div></div></div><div class="row"><div class="col-lg-2" align="center"><div class="card" id="card-13"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-14"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-15"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-16"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-17"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-18"><div class="card-front"></div><div class="card-back"></div></div></div></div><div class="row"><div class="col-lg-2" align="center"><div class="card" id="card-19"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-20"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-21"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-22"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-23"><div class="card-front"></div><div class="card-back"></div></div></div><div class="col-lg-2" align="center"><div class="card" id="card-24"><div class="card-front"></div><div class="card-back"></div></div></div></div></div></section>');
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