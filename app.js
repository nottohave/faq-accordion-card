// Declare variables for setting active button and show/display contents
var buttons = document.querySelectorAll("button");

var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var answer5 = document.querySelector(".answer5");

// Declare variables for answer to reset padding upon click.
var answer1child = document.querySelector(".child1");
var answer2child = document.querySelector(".child2");
var answer3child = document.querySelector(".child3");
var answer4child = document.querySelector(".child4");
var answer5child = document.querySelector(".child5");

// Add and remove active class when clicked
buttons.forEach(button => {
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        button.classList.add("active");
    })
})

// Hide/show answer to each question upon clicking
function faq1() {
    if (answer1.style.display === "none") {
        answer1.style.display = "block";
        answer1child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        answer1.style.display = "none";
    }
}

function faq2() {
    if (answer2.style.display === "none") {
        answer2.style.display = "block";
        answer2child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        answer2.style.display = "none";
    }
}

function faq3() {
    if (answer3.style.display === "none") {
        answer3.style.display = "block";
        answer3child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        answer3.style.display = "none";
    }
}

// Active 4th answer from top to bottom will hide the other three answers on top.
function faq4() {
    let firstAns = answer1.style.display;
    let secondAns = answer2.style.display;
    let thirdAns = answer3.style.display;
    if (firstAns && secondAns && thirdAns === "block" ) {
        faq1();
        faq2();
        faq3();
    };
    if (answer4.style.display === "none") {
        answer4.style.display = "block";
        answer4child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        answer4.style.display = "none";
    }
}

function faq5() {
    if (answer5.style.display === "none") {
        answer5.style.display = "block";
        answer5child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        answer5.style.display = "none";
    }
}
