document.getElementById('contactForm').addEventListener('submit', function (event) {
    var valid = true;

    // Nom validation
    var nameField = document.getElementById('name');
    if (nameField.value.trim() === '') {
        nameField.setCustomValidity('Veuillez entrer votre nom.');
        valid = false;
    } else {
        nameField.setCustomValidity('');
    }

    // Email validation
    var emailField = document.getElementById('email');
    var validEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!validEmailPattern.test(emailField.value)) {
        emailField.setCustomValidity('Veuillez entrer une adresse email valide.');
        valid = false;
    } else {
        emailField.setCustomValidity('');
    }

    // Téléphone validation
    var phoneField = document.getElementById('phone');
    var validPhonePattern = /^[0-9\s\-+().]{7,}$/; // Ajuster le pattern selon les formats de téléphone acceptés
    if (!validPhonePattern.test(phoneField.value)) {
        phoneField.setCustomValidity('Veuillez entrer un numéro de téléphone valide.');
        valid = false;
    } else {
        phoneField.setCustomValidity('');
    }

    // Message validation
    var messageField = document.getElementById('message');
    if (messageField.value.trim() === '') {
        messageField.setCustomValidity('Veuillez décrire ce que vous recherchez.');
        valid = false;
    } else {
        messageField.setCustomValidity('');
    }

    if (!valid) {
        event.preventDefault();
    }
});
