let creative = document.getElementById("tocreative");
let business = document.getElementById("tobusiness");
let tech = document.getElementById("totech");

let title = document.getElementById("landheading");
let desc = document.getElementById("landdesc");

function FadeText(element, newText, newColor = null) {
    // Use the CSS fading transition and change the color if needed
    element.style.opacity = 0;

    setTimeout(() => {
        element.textContent = newText;
        if (newColor) element.style.color = newColor;
        element.style.opacity = 1;
    }, 200);

}

function NavDefault() {
    // Go back to the original content of the nav square
    FadeText(title, "Valerie Fils-Aime", "#961256");
    FadeText(desc, "Welcome to my website! To navigate through the different sections of my site, start by choosing a section!");
}

creative.addEventListener("mouseenter", function(e) {
    e.preventDefault();
    FadeText(title, "Creative", "#f28d8e");
    FadeText(desc, "Enter my world of creativity: every story, poem, and song. Imagination is limitless, and this page is my gallery.");
});
creative.addEventListener("mouseleave", NavDefault);

business.addEventListener("mouseenter", function(e) {
    e.preventDefault();
    FadeText(title, "Business", "#820087");
    FadeText(desc, "This is the business side of things: skills, resume, and contact, all in one place. If you're looking to cut straight to it, this is the section to pick.");
});
business.addEventListener("mouseleave", NavDefault);

tech.addEventListener("mouseenter", function(e) {
    e.preventDefault();
    FadeText(title, "Tech", "#8A7DFF");
    FadeText(desc, "See the logic behind this website, as well as my other projects. The computer becomes the canvas, and ambition is translated to code.");
});
tech.addEventListener("mouseleave", NavDefault);