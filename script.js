document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for menu links
    const menuLinks = document.querySelectorAll(".menu a");

    for (let link of menuLinks) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
