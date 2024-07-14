$(document).ready(function () {
    var owl = $("#carousel-1");
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        lazyLoad: true,
        onInitialized: adjustArrowsPosition
    });

    // Function to adjust owl arrows position based on image height
    function adjustArrowsPosition(event) {
        var activeImg = $(".owl-item.active img");
        if (activeImg.length === 0) return; // Check if activeImg exists

        var activeImgHeight = activeImg.height(); // Get height of active image

        var arrowsTopPosition = (activeImgHeight / 2) - ($(".owl-prev").height() / 2) + 5; // Centering arrows vertically and adding 5px

        // Adjust the position of the arrows
        $(".owl-prev, .owl-next").css("top", arrowsTopPosition + "px");

        // Update arrow position after 500ms
        setTimeout(adjustArrowsPosition, 500);
    }

    // Carousel - Product 
    var owl = $("#carousel-2");
    owl.owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        onInitialized: adjustArrowsPosition,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            320: {
                items: 1,
                nav: true
            },
            321: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
                nav: true,
                loop: true
            },
            1440: {
                items: 7,
                nav: true,
                loop: true
            }
        }

    });

    // Update arrow position when the window is resized
    $(window).resize(adjustArrowsPosition);



    $('#emailForm').submit(function (event) {
        event.preventDefault();
        var email = $('#email').val();
        var valid = true;

        $('.error').remove();

        if (email.length == 0) {
            $('#email').after('<span class="error">Please enter your email</span>');
            valid = false;
        } else {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                $('#email').after('<span class="error">Please enter a valid email</span>');
                valid = false;
            }
        }

        if (valid) {
            console.log("Thank you! Your email address is: " + email);
        }
    });
});

$(document).ready(function(){
    $('.owl-item.cloned').css({"display": "none !important"})
}, 70)




// $(document).ready(function () {
//     var owl = $("#carousel-1");
//     owl.owlCarousel({
//         items: 1,
//         loop: true,
//         dots: true,
//         autoplay: true,
//         lazyLoad: true,
//         onInitialized: adjustArrowsPosition,
//         onChanged: adjustArrowsPosition
//     });

//     // Function to adjust owl arrows position based on image height
//     function adjustArrowsPosition(event) {
//         var activeImg = $(".owl-item.active img");
//         if (activeImg.length === 0) return; // Check if activeImg exists
//         var activeImgHeight = activeImg.height(); // Get height of active image
//         console.log("Active image height:", activeImgHeight);

//         // Log the position of the active image
//         var imgOffset = activeImg.offset();
//         console.log("Active image offset top:", imgOffset ? imgOffset.top : "N/A");

//         // Log the position of the owl prev button
//         var prevButton = $(".owl-prev");
//         if (prevButton.length === 0) return; // Check if prevButton exists
//         var prevOffset = prevButton.offset();
//         console.log("Owl prev button offset top:", prevOffset ? prevOffset.top : "N/A");

//         var arrowsTopPosition = (activeImgHeight / 2) - (prevButton.height() / 2) + 10; // Centering arrows vertically and adding 5px
//         console.log("Arrows top position:", arrowsTopPosition);

//         // Adjust the position of the arrows
//         $(".owl-prev, .owl-next").css("top", arrowsTopPosition + "px");
//     }

//     // Update arrow position every second
//     setInterval(adjustArrowsPosition, 1000);
// });







// $(document).ready(function () {
//     var owl = $("#carousel-1");
//     owl.owlCarousel({
//         items: 1,
//         loop: true,
//         dots: true,
//         autoplay: true,
//         lazyLoad: true,
//     });
// });
