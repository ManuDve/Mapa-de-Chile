// Indices

let indiceRegion = 0;
let posicionActual = 0;

// DOM

const map = document.querySelector("map");
const area = document.querySelectorAll("area");
const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card__title");
const cardText = document.querySelector(".card__text");
const cardImg = document.querySelector(".card__img");
const inputTitle = document.getElementById("input-title");
const inputText = document.getElementById("input-text");
const inputFile = document.getElementById("form-file");
const button = document.getElementById("button");
const form = document.querySelector("form");
const close = document.getElementById("close");
const contenedorForm = document.querySelector(".contenedor-form");
const main = document.querySelector("main");

// Objetos

let regiones = {
    arica: {
        nombre: "Arica y Parinacota",
        texto: "El Morro de Arica",
        img : "./img/00.jpg",
    },
    iquique: {
        nombre: "Tarapacá",
        texto: "Cerro Dragón",
        img : "./img/01.jpg",
    },
    antofagasta: {
        nombre: "Antofagasta",
        texto: "La Portada, La mano del Desierto",
        img : "./img/02.jpg",
    },
    atacama: {
        nombre: "Atacama",
        texto: "Desierto Florido",
        img : "./img/03.jpg",
    },
    coquimbo: {
        nombre: "Coquimbo",
        texto: "Valle del Elqui",
        img : "./img/04.jpg",
    },
    coquimbo: {
        nombre: "Coquimbo",
        texto: "Valle del Elqui",
        img : "./img/04.jpg",
    },
    valparaiso: {
        nombre: "Valparaíso",
        texto: "Lago Peñuelas, Jardín Botánico",
        img : "./img/05.jpg",
    },
    santiago: {
        nombre: "Región Metropolitana",
        texto: "Cerro San Cristóbal",
        img : "./img/06.jpg",
    },
    rancagua: {
        nombre: "O'Higgins",
        texto: "La plaza de Rancagua",
        img : "./img/07.jpg",
    },
    maule: {
        nombre: "Maule",
        texto: "Radal Siete Tazas, Altos de Lircay",
        img : "./img/08.jpg",
    },
    nuble: {
        nombre: "Ñuble",
        texto: "Nevados de Chillán",
        img : "./img/09.jpg",
    },
    biobio: {
        nombre: "Bío-Bío",
        texto: "Saltos del Laja, El Huáscar",
        img : "./img/10.jpg",
    },
    araucania: {
        nombre: "Araucanía",
        texto: "Parque Nacional Conguillío",
        img : "./img/11.jpg",
    },
    rios: {
        nombre: "Los Ríos",
        texto: "Fuerte Valdivia, Saltos del Huilo-Huilo",
        img : "./img/12.jpg",
    },
    lagos: {
        nombre: "Los Lagos",
        texto: "Saltos del Petrohué, Parque Nacional Alerce Andino",
        img : "./img/13.jpg",
    },
    aysen: {
        nombre: "Aysén",
        texto: "Reserva Nacional Cerro Castillo, Capillas de Mármol",
        img : "./img/14.jpg",
    },
    magallanes: {
        nombre: "Magallanes y Antártica Chilena",
        texto: "Torres del Paine, Cueva del Milodón",
        img : "./img/15.jpg",
    },
}

// Funciones

function cambiarDatos() {
    cardTitle.textContent = Object.values(regiones)[this.position].nombre;
    cardText.textContent = "Atractivos Turísticos: " + Object.values(regiones)[this.position].texto;
    cardImg.src = Object.values(regiones)[this.position].img;
    posicionActual = this.position;
}

function mostrarCard() {
    card.hidden = false;
}

function ocultarCard() {
    card.hidden = true;
}

function seguirMouse(e) {
    card.style.left = 100 + e.pageX + 'px';
    card.style.top = -10 + e.pageY + 'px';
}

function actualizarDatos() {
    if (inputTitle.value) {
    Object.values(regiones)[posicionActual].nombre = inputTitle.value;
    cardTitle.textContent = inputTitle.value;
    }
    if (inputText.value) {
    Object.values(regiones)[posicionActual].texto = inputText.value;
    cardText.textContent = "Atractivos Turísticos: "+ inputText.value;
    }
    if (inputFile.value) {
    Object.values(regiones)[posicionActual].img = "./img/" + inputFile.files[0].name;
    cardImg.src = "./img/" + inputFile.files[0].name;
    }
}

function actualizarPlacerholder() {
    inputTitle.placeholder = Object.values(regiones)[this.position].nombre;
    inputText.placeholder = "Atractivos Turísticos: " + Object.values(regiones)[this.position].texto;
}

function descolapsarForm() {
    form.classList.toggle("uncollapse");
    contenedorForm.classList.toggle("mostrar");
} 

function descolapsarFormUnaVez() {
    form.classList.add("uncollapse");
    contenedorForm.classList.add("mostrar");
} 

function colapsarFormUnaVez() {
    form.classList.remove("uncollapse");
    contenedorForm.classList.remove("mostrar");
} 

// Eventos

area.forEach(element => {
    element.addEventListener("mouseenter", cambiarDatos);
    element.addEventListener("click", actualizarPlacerholder);
    element.addEventListener("click", descolapsarFormUnaVez)
    element.position = indiceRegion;
    indiceRegion++;
});

map.addEventListener("mouseenter", mostrarCard);
map.addEventListener("mouseleave", ocultarCard);
button.addEventListener("click", actualizarDatos);
close.addEventListener("click", descolapsarForm);
main.addEventListener("click", colapsarFormUnaVez, true);
document.addEventListener('mousemove', seguirMouse);
