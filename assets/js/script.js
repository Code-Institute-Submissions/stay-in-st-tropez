//Setting constant variables for buttons 
const beachReco = document.getElementById("reco-button-1");
const restaurantReco = document.getElementById("reco-button-2");
const vineyardReco = document.getElementById("reco-button-3");
const watchVideo = document.getElementById("youtube-video");
const videoContainer = document.getElementsByClassName("video-container");
const beachRecoPara = document.getElementById("reco-para-1");
const restaurantRecoPara = document.getElementById("reco-para-2");
const vineyardRecoPara = document.getElementById("reco-para-3");
const scrollButton = document.getElementById("scroll-top");
let pageHeight = 200;

//Hides the following components when document is ready
$(function () {
    $(videoContainer).hide();
    $(beachRecoPara).hide();
    $(restaurantRecoPara).hide();
    $(vineyardRecoPara).hide();
});

/* Slideshow created following the Snook tutorial https://snook.ca/archives/javascript/simplest-jquery-slideshow using jQuery */
// Slide show fades from image to image 
$(function () {
    $('.slideshow img:gt(0)').hide();
    setInterval(function () {
        $('.slideshow :first-child')
            .fadeOut(2000)
            .next('img')
            .fadeIn(2000)
            .end()
            .appendTo('.slideshow');
    },
        6000);
});
//End of credit

//Function changes text and colour of button when clicked for 'Watch Video CTA'
function changeText() {
    if ($(watchVideo).html() === "Watch Video") {
        $(watchVideo).html("Hide Video");
        $(watchVideo).addClass("active");
    }
    else {
        $(watchVideo).html("Watch Video");
        $(watchVideo).removeClass("active");
    }
};

//Function changes text and colour of More Details Button's 
function showDetails(recommendation) {

    if ($(recommendation).html() === "More Details") {
        $(recommendation).html("Hide Details");
        $(recommendation).addClass("active");
    }
    else {
        $(recommendation).html("More Details");
        $(recommendation).removeClass("active");
    }

}

/* Event listeners that toggle content when button is clicked for youtube video and more details and changes status of buttons */
$(watchVideo).click(function () {
    $(videoContainer).slideToggle();
    changeText();
});

$(beachReco).click(function () {
    $(beachRecoPara).slideToggle();
    showDetails(beachReco)
});

$(restaurantReco).click(function () {
    $(restaurantRecoPara).slideToggle();
    showDetails(restaurantReco)
});

$(vineyardReco).click(function () {
    $(vineyardRecoPara).slideToggle();
    showDetails(vineyardReco)
});

//End of jQuery

// On scroll button created and adjusted from following WS3schools tutorial
//Assigns the scroll function to window scroll
window.onscroll = function () {
    scrollToTop();
};

//Function displays the button when the customer has scolled 200px 
function scrollToTop() {

    if (document.body.scrollTop > pageHeight || document.documentElement.scrollTop > pageHeight) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }

}

//Function sets the location as 0px from top of the page to be called by button
function topOfPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

