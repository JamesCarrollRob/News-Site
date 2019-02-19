/*This is will be the javascript file for my True News website*/


// var test =  document.querySelectorAll(".site-header");


function messageReveal() {
    console.log("secret message");

}
// document.getElementsByClassName("site-header").addEventListener("onclick", messageReveal);
console.log("test message")
const x = document.getElementById("hiddenMessage");

x.addEventListener("click", () => {
    console.log("This is the hidden message! If you can read this, my code works!");
});