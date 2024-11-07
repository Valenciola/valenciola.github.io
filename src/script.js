//Classes
class Project {
    constructor(title, img, desc, role, git, demo) {
        this.title = title;
        this.img = img;
        this.desc = desc;
        this.role = role;
        this.git = git;
        this.demo = demo;
    }

    giveinfo() {
        let info = [this.title, this.img, this.desc, this.role, this.git];
        return info;
    }
}

//Functions
updateProj = function(project) {
    document.getElementById("projtitle").textContent = project.title;
    document.getElementById("projimg").setAttribute("src", "Assets/projs/" + project.img);
    document.getElementById("projdesc").textContent = project.desc;
    document.getElementById("projrole").innerHTML = "<p><strong>Role: </strong> " + project.role + "</p>";

    if (project.git == null) {
        document.getElementById("projgit").style.display = "none";
    }
    else {
        document.getElementById("projgit").style.display = "initial";
        document.getElementById("projgit").setAttribute("href", project.git);
    }

    if (project.demo == null) {
        document.getElementById("projdemo").style.display = "none";
    }
    else {
        document.getElementById("projdemo").style.display = "initial";
        document.getElementById("projdemo").setAttribute("href", project.demo);
    }
}

illumNav = function() {
    let dots = document.getElementsByClassName("navdot").length;
    for(i = 0; i < dots; i++) {
        if(i == current) {
            document.getElementsByClassName("navdot")[i].style.color = "white";
        }
        else {
            document.getElementsByClassName("navdot")[i].style.color = "rgb(57, 6, 52)";
        }
    }
}

cycleProj = function() {
    //console.log(current);
    let limit = projs.length;
    if ((current + 1) == limit) {
        current = 0;
    }
    else {
        current++;
    }
    updateProj(projs[current]);
    illumNav();
}

//Variables
let mathematix = new Project("Mathematix", "Mathematix.png", "A nodeblock-based graphing calculator web app", "Documentation and Light Coding", "https://github.com/makaip/mathematix", "https://makaip.com/mathematix/");
let industdungeon = new Project("Industrial Dungeon", "IndustDungeon.png", "A terminal text game coded in Python", "Main Developer", "https://github.com/Valenciola/Industrial-Dungeon", null);


let projs = [mathematix, industdungeon];
let current = 0;

//Running
for (i = 0; i < projs.length; i++) {
    document.getElementById("projnav").innerHTML = document.getElementById("projnav").innerHTML + "<li class=\"navdot\"></li>";
}
updateProj(mathematix);
illumNav();

//Event Listeners
document.getElementById("projnav").addEventListener("click", cycleProj);

//Other