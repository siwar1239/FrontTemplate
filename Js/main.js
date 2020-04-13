function isXs() {
    return $('.breakpoint-detection .detect-xs').is(':visible') === true;
}

function isSm() {
    return $('.breakpoint-detection .detect-sm').is(':visible') === true;
}

function isMd() {
    return $('.breakpoint-detection .detect-md').is(':visible') === true;
}

function isLg() {
    return $('.breakpoint-detection .detect-lg').is(':visible') === true;
}
$(document).ready(function() {
   console.log('hello world !')
});
