// Lancement de la vidéo de présentation des services
document.getElementById('play-video').addEventListener('click', function() {
    var button = document.getElementById('play-video');
    var serviceVideo = document.getElementById('service-video');
    var videoContainer = document.getElementById('video-container');
    var content = document.getElementById('content');
    var grid = document.getElementById('grid-container');
    
    // Forcer le reflow
    videoContainer.style.transform = 'translateX(-50%)';
    //document.body.style.overflow = 'auto';
    
    setTimeout(function() {
        serviceVideo.play(); // Jouer la vidéo des services
        content.classList.add('hidden'); // Cacher le contenu
        button.classList.add('hidden'); // Cacher le bouton
    }, 500); // Correspondre à la durée de la transition

    setTimeout(function() {
        grid.style.display = 'grid'; // Afficher le grid
    }, 1000);
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
    let slides = document.getElementsByClassName("slide");
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');

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
