// Function to toggle the hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional smooth scrolling behavior
    });
}

// Add event listener to the logo for scrolling to the top
document.addEventListener("DOMContentLoaded", function () {
    const logoLink = document.querySelector(".logo_link");
    if (logoLink) {
        logoLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default action of the link
            scrollToTop(); // Call the scrollToTop function
        });
    }
});
