$(document).ready(function () {
    let count;
    count = 0;

    $('#how-to-play-button').click(function () {
        $('#exampleModalCenter').modal('show');
    })
    
    $('.close-modal').click(function () {
        $('#exampleModalCenter').modal('hide');
    })

    $('#darkmode-button').click(function () {
        count = count + 1;
        if (count % 2 === 0) {
            $('#darkmode-link').remove();
        } else {
            $(document.head).append('<link id="darkmode-link" href="assets/css/darkmode.css" rel="stylesheet" type="text/css">');
        }
    })
})