let titles = ["Settlers of Catan", "Go Fish! API Card Game", "To-do List"];
let descriptions = [
    "Created a digital version of the popular board game Settlers of Catan using Java for the game engine and\
    JavaFX for the executable application. This version includes all the features of the base game,\
    and supports up to 4 players on the same device. ",
    
    "Created a website using HTML/CSS to recreate the children’s card game Go Fish! while utilizing\
    an API for playing cards (deckofcardsapi.com) to generate, shuffle, and draw cards. The game\
    management and API handling was done through JavaScript.",

    "Created a To-do list desktop app using Electronjs along with JavaScript and HTML/CSS. The app had various\
    functional capabilities, including creating list categories, setting due dates, sorting by assignment/class,\
    and more. "    
];
let images = ["catan.jpg", "go_fish.png", "to_do_list.jpg"];

let index = -1;
let numProjects = titles.length;

function prev() {
    if(index == 0) {
        index = titles.length - 1;
    }
    else {
        index--;
    }
    document.getElementById("project-title").textContent = titles[index];
    document.getElementById("project-desc").textContent = descriptions[index];
    document.getElementById("project-img").src = images[index];
}

function next() {
    if(index == titles.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    document.getElementById("project-title").textContent = titles[index];
    document.getElementById("project-desc").textContent = descriptions[index];
    document.getElementById("project-img").src = images[index];
}

next();