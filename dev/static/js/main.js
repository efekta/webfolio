$(document).ready(function () {
    svg4everybody({});
});


$(function(){
    $(".element").typed({
        // strings: ["Lorem 1 ^1000", "Lorem 2 ^1000", "Lorem 3 ^1000"],
        typeSpeed: 50,
        backSpeed: 100,
        startDelay: 1500,
        loop: true,
        loopCount: false,
        stringsElement: $('#typed-strings')
    });
});

$(function(){
    $('.burger').on('click', function (e) {
      $('.main-nav').toggleClass('show');
      $('.burger').toggleClass('open');
    })
});

