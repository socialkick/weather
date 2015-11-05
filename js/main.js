
// LOADING SCREEN

$(document).ready(function() {
    setTimeout(function(){
        $('#loading').addClass('dormant');
    }, 0);
});

function delay(URL) {
    setTimeout(function () {
        window.location = URL
    }, 200);
    $('#loading').removeClass('dormant');

    // ----- Disable Links After one is Clicked (prevent click confusion)
    var all_links = document.getElementsByTagName("a");
    for(var i=0; i<all_links.length; i++){
        all_links[i].removeAttribute("href");
    }
}