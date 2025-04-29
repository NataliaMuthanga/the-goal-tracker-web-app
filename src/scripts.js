const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", function() {
    // Mobile Menu Visisbility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when close button is clicked
menuCloseButton.addEventListener("click", function(){
    menuOpenButton.click();
});