// working on active element, tune in tmr
// var members = document.querySelector(".members");
// var hrMargin = document.querySelector("#pageHr1");

// var mamximum = document.querySelector(".maximum");
// var hrMargin2 = document.querySelector("#pageHr2");

// var forgotPw = document.querySelector(".forgotPw");
// var hrMargin3 = document.querySelector("#pageHr3");

// var subs = document.querySelector(".subs");
// var hrMargin4 = document.querySelector("#pageHr4");

// var support = document.querySelector(".support");
// var hrMargin5 = document.querySelector("#pageHr5");

var buttons = document.querySelectorAll("button");
var check = document.getElementById("1");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        button.classList.add("active");
        showHide();
    })
})

//seperate function to show/hide content on click element.
function showHide() {

    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

// function displayMembers() {
//     if (members.style.display === "none") {
//         hrMargin2.style.margin = "0rem 0rem 1rem 0rem";
//         members.style.display = "block";
//     } else {
//         members.style.display = "none";
//         hrMargin.style.margin = "1rem 0rem 1rem 0rem";
//     }
// }
// function displayMaximum() {
//     if (mamximum.style.display === "none") {
//         hrMargin2.style.margin = "0rem 0rem 1rem 0rem";
//         mamximum.style.display = "block";
//     } else {
//         mamximum.style.display = "none";
//         hrMargin2.style.margin = "1rem 0rem 1rem 0rem";
//     }
// }
// function displayForgotPw() {
//     if (forgotPw.style.display === "none") {
//         hrMargin3.style.margin = "0rem";
//         forgotPw.style.display = "block";
//     } else {
//         forgotPw.style.display = "none";
//         hrMargin3.style.margin = "1rem 0rem 1rem 0rem";
//     }
// }
// function displaySubs() {
//     if (subs.style.display === "none") {
//         hrMargin4.style.margin = "0rem";
//         subs.style.display = "block";
//     } else {
//         subs.style.display = "none";
//         hrMargin4.style.margin = "1rem 0rem 1rem 0rem";
//     }
// }

// let cardHeight = document.querySelector(".card");
// function displaySupport() {
//     if (support.style.display === "none") {
//         cardHeight.style.height = "550px";
//         hrMargin5.style.margin = "0rem";
//         support.style.display = "block";
//     } else {
//         support.style.display = "none";
//         hrMargin5.style.margin = "1rem 0rem 1rem 0rem";
//         cardHeight.style.height = "500px";

//     }
// }
