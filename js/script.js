;(function($) {
    var code    = ',38,38,40,40,37,39,37,39,66,65';
    var typed   = '';
    var timeout = null;

    var konami = function() {
        alert('Sorry, there is no konami code here.');
    };

    var reset = function() {
        typed = '';
    };

    $(window).keydown(function(e) {
        typed += ',' + e.keyCode;
        if (code === typed) {
            konami();
        }
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(reset, 1000);
    })

}(jQuery));
