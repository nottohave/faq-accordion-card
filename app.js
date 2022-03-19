// Declare variables for setting active button and show/display contents
var buttons = document.querySelectorAll("button");


// Add and remove active class when clicked
buttons.forEach(button => {
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        button.classList.add("active");
    })
})


