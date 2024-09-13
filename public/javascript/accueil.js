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
const Textes = [{title: 'Essaouira, une perle au bord de l\'Atlantique', 
                body:`Nichée sur la côte atlantique marocaine, Essaouira charme par son ambiance authentique et son cadre enchanteur. 
                      Connue pour sa médina inscrite au patrimoine mondial de l\'UNESCO, ses remparts historiques et son port animé, la ville offre un équilibre parfait entre tradition et modernité. 
                      <br><br>Avec ses plages vastes et ses paysages à couper le souffle, Essaouira invite à la détente dans un cadre unique.`},
                {title: 'Un art de vivre entre mer et culture', 
                body:`À Essaouira, les activités ne manquent pas. Que vous soyez amateur de sports nautiques comme le kitesurf ou la planche à voile, 
                      ou plutôt attiré par la découverte culturelle, la ville a tout pour plaire. Profitez de balades à cheval ou à dos de chameau le long de la plage, 
                      explorez les souks d\'artisanat local, ou laissez-vous porter par les rythmes du célèbre festival Gnaoua. 
                      <br><br>Essaouira est un véritable carrefour entre nature et culture, offrant une expérience riche et variée.`},
                {title: 'Investir à Essaouira : un choix de charme et de sérénité', 
                body:`Essaouira représente une opportunité unique pour les investisseurs. Le marché immobilier y est en plein développement, 
                    tout en restant accessible. Que ce soit pour une résidence secondaire, une maison d’hôtes, ou un projet immobilier à long terme, 
                    la ville combine charme, tranquillité et potentiel de rentabilité. <br><br>Avec son cadre de vie paisible, son climat doux toute l’année et sa croissance touristique, 
                    Essaouira est une destination idéale pour un investissement immobilier durable.`},
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
    
    textTitle.innerHTML = Textes[slideIndexText].title;
    textBody.innerHTML = Textes[slideIndexText].body;
    
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndexText].classList.add("active");
}
