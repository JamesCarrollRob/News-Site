/*This is the javascript file for my True News website*/





/* This is a test to check if the js is linked to the html page correctly */
console.log("test message")

/* This is some more test code. Prints a message to the console when the site header is clicked */
const x = document.getElementById("hiddenMessage");

x.addEventListener("click", () => {
    console.log("This is the hidden message! If you can read this, my code works!");
});


$("#titleHeader").hide();
$("#titleHeader").fadeIn(1000);
// End of test code

// window.onscroll = function() { stickyHeader() };
// var top = document.getElementById("titleHeader");
// var y = top.offsetTop;

// function stickyHeader() {

//     if (window.pageYOffset > y) {

//         top.classList.add("sticky");
//     } else {
//         top.classList.remove("sticky");
//     }

// }


// Shows Hides and slides up a message.
$("#flashMessage").hide(2000);
$("#flashMessage").fadeIn(3000);
$("#flashMessage").delay(3000);
$("#flashMessage").slideUp();