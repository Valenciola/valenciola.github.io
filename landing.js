let creative = document.getElementById("tocreative");
let business = document.getElementById("tobusiness");
let tech = document.getElementById("totech");

let title = document.getElementById("landheading");
let desc = document.getElementById("landdesc");

function NavDefault() {
    title.textContent = "Valerie Fils-Aime";
    title.style.color = "black"

    desc.textContent = "Welcome to my website!";
    return;
}

creative.addEventListener("mouseenter", function(e) {
    e.preventDefault();
    title.textContent = "Creative";
    title.style.color = "#f28d8e"

    desc.textContent = "Enter my world of creativity: every story, poem, and song. Imagination is limitless, and this page is my gallery."
});
creative.addEventListener("mouseleave", NavDefault);

business.addEventListener("mouseenter", function(e) {
    e.preventDefault();
    title.textContent = "Business";
    title.style.color = "#820087"

    desc.textContent = "This is the business side of things: skills, resume, and contact, all in one place. If you're looking to cut straight to it, this is the section to pick."
});
business.addEventListener("mouseleave", NavDefault);

tech.addEventListener("mouseenter", function(e) {
    e.preventDefault();
    title.textContent = "Tech";
    title.style.color = "#8A7DFF"

    desc.textContent = "See the logic behind this website, as well as my other projects. The computer becomes the canvas, and ambition is translated to code."
});
tech.addEventListener("mouseleave", NavDefault);