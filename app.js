const accordion = document.getElementsByClassName("container")

// Add and remove active class when clicked
for (i = 0; i < accordion.length; i++ ) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        console.log(this);
    })
}
