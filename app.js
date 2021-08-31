var buttons = document.querySelectorAll("button");
var activeBtn = document.getElementsByClassName("arrow active");

var answer1 = document.querySelector(".answer1");
var answer2 = document.querySelector(".answer2");
var answer3 = document.querySelector(".answer3");
var answer4 = document.querySelector(".answer4");
var answer5 = document.querySelector(".answer5");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        button.classList.add("active");
    })
})

function faq1() {
    if (answer1.style.display === "none") {
        answer1.style.display = "block";
    } else {
        answer1.style.display = "none";
    }
}

function faq2() {
    if (answer2.style.display === "none") {
        answer2.style.display = "block";
    } else {
        answer2.style.display = "none";
    }
}

function faq3() {
    if (answer3.style.display === "none") {
        answer3.style.display = "block";
    } else {
        answer3.style.display = "none";
    }
}

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
    } else {
        answer4.style.display = "none";
    }
}

function faq5() {
    if (answer5.style.display === "none") {
        answer5.style.display = "block";
    } else {
        answer5.style.display = "none";
    }
}
