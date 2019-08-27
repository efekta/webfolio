$(document).ready(function () {
    svg4everybody({});
});


$(function(){
    $(".element").typed({
        // strings: ["Lorem 1 ^1000", "Lorem 2 ^1000", "Lorem 3 ^1000"],
        typeSpeed: 30,
        backSpeed: 100,
        startDelay: 1000,
        stringsElement: $('#typed-strings')
    });
});
