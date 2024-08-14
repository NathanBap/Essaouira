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