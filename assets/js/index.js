$(document).ready(function () {
    var count = localStorage.getItem('count') || 0;
    
    if (count % 2 === 0) {
        $('#darkmode-link').remove();
    } else {
        $(document.head).append('<link id="darkmode-link" href="assets/css/darkmode.css" rel="stylesheet" type="text/css">');
    }

    $('#how-to-play-button, #how-to-play-dropdown').click(function () {
        $('#exampleModalCenter').modal('show');
    })
    
    $('.close-modal').click(function () {
        $('#exampleModalCenter').modal('hide');
    })

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
})