// Lancement de la vidéo de présentation des services
document.getElementById('play-video').addEventListener('click', function() {
    var button = document.getElementById('play-video');
    var serviceVideo = document.getElementById('service-video');
    var videoContainer = document.getElementById('video-container');
    var content = document.getElementById('content');
    
    // Forcer le reflow
    videoContainer.style.transform = 'translateX(-50%)';
    
    setTimeout(function() {
        serviceVideo.play(); // Jouer la vidéo des services
        content.classList.add('hidden'); // Cacher le contenu
        button.classList.add('hidden'); // Cacher le bouton
    }, 500); // Correspondre à la durée de la transition
});


document.getElementById('contact-us').addEventListener('click', function() {
    window.location.href = '/contact';
});

// Animation on load
window.addEventListener("load", () => {
    document.body.classList.remove("loading-anim");
});