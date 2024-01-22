function validateForm() {
    var Tel = document.forms["messageform"]["tel"].value;
    var fullName = document.forms["messageform"]["fullname"].value;
    var email = document.forms["messageform"]["email"].value;
    var subject = document.forms["messageform"]["subject"].value;

    if (Tel.length > 8 || !/^\d+$/.test(Tel)) {
        alert("Le numéro de téléphone doit contenir jusqu'à huit chiffres !");
        return false;
    }

    var regexName = /^[A-Za-z\s]+$/;
    if (!regexName.test(fullName)) {
        alert("Le nom et le prénom ne doivent contenir que des lettres et des espaces !");
        return false;
    }

    var regexEmail = /^\S+@\S+\.\S+$/;
    if (!regexEmail.test(email)) {
        alert("Veuillez entrer une adresse email valide !");
        return false;
    }

    if (subject.trim() === '') {
        alert("Veuillez saisir un sujet !");
        return false;
    }

    return true;
}
document.addEventListener('DOMContentLoaded', function() {
    var typedMultipleTest = new Typed(".multiple-test", {
        strings: ["Houssem Ellouze", "Houssem Ellouze", "Houssem Ellouze"],
        typeSpeed: 50,
        backSpeed: 100,
        backDelay: 1000,
        loop: false,
        onComplete: function() {
            console.log('First Typed animation has completed!');
            secondFunction();
        }
    });

    function secondFunction() {
        var typedMultiplePh = new Typed(".multiple-ph", {
            strings: ["Je suis actuellement un élève ingénieur en 1ère année du cycle d'ingénierie en Informatique à l'École supérieure privée d'ingénierie et de technologie (ESPRIT)"],
            typeSpeed: 10,
            backSpeed: 0,
            backDelay: 1000,
            loop: false
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var typedProposFunction = new Typed(".propos-funct", {
        strings: [
            "Mon engagement envers l'innovation et l'amélioration continue me pousse à rester à jour avec les dernières avancées technologiques afin de fournir des solutions web de qualité supérieure.","Mon objectif est de combiner habilement les langages de programmation et les outils modernes pour concevoir des plateformes en ligne intuitives, esthétiques et efficaces."
        ],
        typeSpeed: 5,
        backSpeed: 0,
        backDelay: 1000,
        loop: true
    });
});
function sendEmail() {
    Email.send({
        SecureToken: "a623954e-2dcc-4fa7-b6bc-b0f18cfd4b8e",
        To: "ellouzeh00@gmail.com",
        From: document.getElementById("email").value,
        Subject: "New Contact From Enquiry",
        Body: "Full Name: " + document.getElementById("fullname").value +
            "<br>Email: " + document.getElementById("email").value +
            "<br>Numéro: " + document.getElementById("Tel").value +
            "<br>Message: " + document.getElementById("subject").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}
