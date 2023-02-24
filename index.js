window.addEventListener("load", main)

const IMGS = ["Monster 03_01.jpg", "Monster 03_02.jpg", "Monster 03_03.jpg", "Monster 03_04.jpg", "Monster 04_01.jpg", "Monster 04_02.jpg", "Monster 04_03.jpg", "Monster 04_04.jpg", "Monster 04_06.jpg", "Monster 04_07.jpg", "Monsters 01_02.jpg", "Monsters 01_03.jpg", "Monsters 01_04.jpg", "Monsters 01_05.jpg", "Monsters 01_06.jpg", "Monsters 01_07.jpg", "Monsters 01_08.jpg", "Monsters 01_09.jpg", "Monsters 01_10.jpg", "Monsters 01_11.jpg"]
const ETELEK = ["palacsinta", "tojásos nokedli", "rántotthús"];

function main() {

    const tartalom = document.getElementById("tartalom");



    etelekMegjelenitese(tartalom);
    kepekBefuz();
    console.log("kész")
}

function etelekMegjelenitese(tartalom) {
    tartalom.innerHTML += "<ul>";
    const tartalomUl = document.querySelectorAll("#tartalom ul")[0];

    for (let i = 0; i < ETELEK.length; i++) {
        tartalomUl.innerHTML += `<li>${ETELEK[i]}</li>`;
    }
}

function kepekBefuz() {
    const GALERIA_DIV = document.getElementById("galeria");

    for (let i = 0; i < IMGS.length; i++){
        let img = document.createElement("img");
        GALERIA_DIV.appendChild(img);
        img.src = `imgs/${IMGS[i]}`;
        img.title = IMGS[i];
        img.alt = IMGS[i];
    }
}