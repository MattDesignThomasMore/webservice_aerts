
// Voeg cursor-pointer klasse toe aan de parentElement van de telefoon- en e-mailiconen
    document.querySelectorAll('.fa-phone, .fa-at').forEach(function(icon) {
        icon.parentElement.classList.add('cursor-pointer');
    });

    // Voeg de functionaliteit toe voor de telefoonknop
    document.querySelector('.fa-phone').parentElement.addEventListener('click', function() {
        // Controleer of de gebruiker een softphone-applicatie heeft geïnstalleerd
        var softphoneInstalled = confirm('Do you have a softphone application installed on your computer?');

        if (softphoneInstalled) {
            // Als de gebruiker een softphone-applicatie heeft geïnstalleerd, open dan de softphone met het telefoonnummer
            window.location.href = 'yoursoftphoneapp:tel:+32468151746';
        } else {
            // Als de gebruiker geen softphone-applicatie heeft geïnstalleerd, geef dan een melding dat ze hun telefoon moeten gebruiken
            alert('You don\'t have a softphone application installed. Please use your phone to make the call.');
        }
    });

    // Voeg de functionaliteit toe voor de e-mailknop
    document.querySelector('.fa-at').parentElement.addEventListener('click', function() {
        window.location.href = 'mailto:matthew.aerts@telenet.be';
    });


 // Voeg cursor-pointer klasse toe aan de parentElement van de telefoon- en e-mailiconen
document.querySelectorAll('.fa-phone, .fa-at').forEach(function(icon) {
    icon.parentElement.classList.add('cursor-pointer');
});

// Voeg de functionaliteit toe voor de telefoonknop in de footer
document.querySelector('.footer .fa-phone').parentElement.addEventListener('click', function() {
    // Controleer of de gebruiker een softphone-applicatie heeft geïnstalleerd
    var softphoneInstalled = confirm('Do you have a softphone application installed on your computer?');

    if (softphoneInstalled) {
        // Als de gebruiker een softphone-applicatie heeft geïnstalleerd, open dan de softphone met het telefoonnummer
        window.location.href = 'yoursoftphoneapp:tel:+32468151746';
    } else {
        // Als de gebruiker geen softphone-applicatie heeft geïnstalleerd, geef dan een melding dat ze hun telefoon moeten gebruiken
        alert('You don\'t have a softphone application installed. Please use your phone to make the call.');
    }
});

// Voeg de functionaliteit toe voor de e-mailknop in de footer
document.querySelector('.footer .fa-at').parentElement.addEventListener('click', function() {
    // Open de standaard e-mailclient om een e-mail te verzenden
    window.location.href = 'mailto:matthew.aerts@telenet.be';
});


document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Voorkom standaardgedrag van het formulier indienen
    
    // Verkrijg het emailadres dat is ingevoerd
    var email = document.getElementById("email").value;

    // Hier kun je verdere acties toevoegen, zoals het opslaan van het e-mailadres in een database of iets anders
    
    // Toon een bedankmelding in een pop-up
    alert("Thank you for subscribing! You won't miss anything.");

    // Optioneel: stuur de gebruiker door naar een andere pagina
    // window.location.href = "bedankpagina.html";
    document.getElementById("subscribeForm").reset();

});

function resetForm() {
    document.getElementById("contactForm").reset();
}

// Reset the form when the page is loaded or reloaded
window.addEventListener('load', resetForm);



function resetForm() {
    document.getElementById("contactForm").reset();
    return false; // Prevent form submission
}

function resetForm() {
    document.getElementById("contactForm").reset();
}

// Reset the form when the user leaves the page
window.onunload = function() {
    resetForm();
};

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
