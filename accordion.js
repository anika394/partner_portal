document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    var currentPage = window.location.pathname.split("/").pop();
    var links = document.querySelectorAll(".panel a");
    links.forEach(function(link) {
        if (link.getAttribute("href").includes(currentPage)) {
            link.parentElement.style.display = "block"; 
            link.parentElement.previousElementSibling.classList.add("active"); 
            link.classList.add("current-page");
        }
    });
});
