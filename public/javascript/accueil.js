// Lancement de la vidéo de présentation des services
document.getElementById('play-video').addEventListener('click', function() {
    var contactVideo = document.getElementById('contact-video');
    var videoContainer = document.getElementById('video-container');
    
    // Afficher ma grille correctement
    videoContainer.style.transform = 'translateX(-50%)';
    videoContainer.style.overflow = 'visible';
    
    setTimeout(function() {
        contactVideo.play(); // Jouer la vidéo des services
    }, 500); // Correspondre à la durée de la transition

    // Afficher les éléments de ma page
    // setTimeout(function() {
    //     grid.style.display = 'grid'; // Afficher le grid
    // }, 1000);
});


document.getElementById('contact-us').addEventListener('click', function() {
    window.location.href = '/contact';
});

// Animation on load
window.addEventListener("load", () => {
    document.body.classList.remove("loading-anim");
});

let slideIndex = 0;
showSlides();

// Fonction pour changer de slide avec les flèches
function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

// Fonction pour afficher les slides
function showSlides() {
    let slides = document.getElementsByClassName("diapo-image");

    // Réinitialiser l'index s'il dépasse le nombre de slides
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Masquer toutes les slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Afficher la slide actuelle
    slides[slideIndex].style.display = "block";
}

// Ajouter les gestionnaires d'événements pour les flèches
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

/* Slide text */

const Textes = [{title: 'Architecture', body:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto fugit possimus, et quisquam animi laboriosam officia, voluptate unde soluta iure consequuntur. Tenetur voluptates provident vero. Quisquam soluta laudantium cumque.' +
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto fugit possimus, et quisquam animi laboriosam officia, voluptate unde soluta iure consequuntur. Tenetur voluptates provident vero. Quisquam soluta laudantium cumque.' +
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto fugit possimus, et quisquam animi laboriosam officia, voluptate unde soluta iure consequuntur. Tenetur voluptates provident vero. Quisquam soluta laudantium cumque.' +
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit architecto fugit possimus, et quisquam animi laboriosam officia, voluptate unde soluta iure consequuntur. Tenetur voluptates provident vero. Quisquam soluta laudantium cumque.'},
                {title: 'Activités', body:'Activités texte long.'},
                {title: 'Services', body:'Services texte long.'},
]
const slidesTextContainer = document.querySelector('.slides-text-container');
const textTitle = document.getElementById('slide-text-title');
const textBody = document.getElementById('slide-text-body');
const paginationText = document.getElementById('slide-text-pagination');

let slideIndexText = 0;
initSlidesText();
showSlidesText(slideIndexText);

function initSlidesText() {
    // pour chaque texte, on crée un bouton de pagination
    Textes.forEach((text, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => currentSlideText(index));
        paginationText.appendChild(dot);
    });
}

function currentSlideText(n) {
    showSlidesText(slideIndexText = n);
}

function showSlidesText(n) {
    const dots = document.querySelectorAll(".dot");
    
    if (n > Textes.length-1) {slideIndexText = 0}
    if (n < 0) {slideIndexText = Textes.length}
    
    textTitle.textContent = Textes[slideIndexText].title;
    textBody.textContent = Textes[slideIndexText].body;
    
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndexText].classList.add("active");
}
