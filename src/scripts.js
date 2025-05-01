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

// Goal form
let goals = JSON.parse(localStorage.getItem("goals")) || [];
let goalForm = document.getElementById("goal-form");
let goalList = document.getElementById("goal-list");

goalForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const goalType = document.getElementById("type-of-goal").value;
    const description = document.getElementById("description").value.trim();
    const date = document.getElementById("date").value;

    const goal = {
        goalType: goalType,
        description: description,
        date: date
    };

    goals.push(goal);
    localStorage.setItem("goals", JSON.stringify(goals));
    goalForm.reset();
    displayGoals(goals);
});

function displayGoals(data) {
    goalList.innerHTML = "";
    data.forEach(goal => {
        let div = document.createElement("div");
        div.className = "goal";
        div.innerHTML = `
        <h1>${goal.goalType}</h1>
        <h3>${goal.description}</h3>
        <h3>${goal.date}</h3>
        `;
        goalList.appendChild(div);
    });
};
displayGoals(goals);
// localStorage.removeItem("goals")


// Contact page
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const contact = {
        name: name,
        email: email,
        message: message
    };

    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contact));
    contactForm.reset();
});