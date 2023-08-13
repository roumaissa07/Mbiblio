const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
}

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
}

window.addEventListener('scroll', function() {
    var ribbon = document.querySelector('.ribbon');
    if (window.scrollY > 0) {
      ribbon.classList.add('show');
    } else {
      ribbon.classList.remove('show');
    }
  });
  
  // Sélectionnez le lien "A PROPOS DE NOUS" dans la barre de navigation
const aProposLink = document.querySelector('nav a[href="#apropos"]');

// Ajoutez un gestionnaire d'événements pour le clic sur le lien
aProposLink.addEventListener('click', function(event) {
  event.preventDefault(); // Empêche le comportement de lien par défaut

  // Sélectionnez la section "A PROPOS DE NOUS" par son ID
  const aProposSection = document.getElementById('apropos');

  // Faites défiler la page jusqu'à la section "A PROPOS DE NOUS"
  aProposSection.scrollIntoView({ behavior: 'smooth' });
});
