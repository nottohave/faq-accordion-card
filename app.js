// Declare variables for setting active button and show/display contents
var buttons = document.querySelectorAll("button");

var ans1 = document.querySelector(".ans1");
var ans2 = document.querySelector(".ans2");
var ans3 = document.querySelector(".ans3");
var ans4 = document.querySelector(".ans4");
var ans5 = document.querySelector(".ans5");

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
    if (ans1.style.display === "none") {
        ans1.style.display = "block";
        ans1child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        ans1.style.display = "none";
    }
}

function faq2() {
    if (ans2.style.display === "none") {
        ans2.style.display = "block";
        ans2child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        ans2.style.display = "none";
    }
}

function faq3() {
    if (ans3.style.display === "none") {
        ans3.style.display = "block";
        ans3child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        ans3.style.display = "none";
    }
}

// Active 4th answer from top to bottom will hide the other three answers on top.
function faq4() {
    let firstAns = ans1.style.display;
    let secondAns = ans2.style.display;
    let thirdAns = ans3.style.display;
    if (firstAns && secondAns && thirdAns === "block" ) {
        faq1();
        faq2();
        faq3();
    };
    if (ans4.style.display === "none") {
        ans4.style.display = "block";
        ans4child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        ans4.style.display = "none";
    }
}

function faq5() {
    if (ans5.style.display === "none") {
        ans5.style.display = "block";
        ans5child.style.padding = "0.5rem 0rem 0.3rem 0rem";
    } else {
        ans5.style.display = "none";
    }
}
