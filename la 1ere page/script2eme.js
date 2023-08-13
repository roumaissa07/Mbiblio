let products = {
    data: [
        {
            productsName: "porte",
            category: "Partitions", 
            price: "20 000 " ,
            image: "porte reel.jpg",
        },
        {
            productsName: "Té d'évent en PVC",
            category: "Équipement", 
            price: "250",
            image: "te.jpg",
        },
        {
            productsName: "Façade ventilée ",
            category: "Enveloppe", 
            price: "5000",
            image: "doublepeau.jpg",
        },
        {
            productsName: "Carrelage en porcelaine",
            category: "Revêtements", 
            price: "900",
            image: "carrelage.jpg",
        },
        {
            productsName: "Elément préfabriqué de fondation",
            category: "Démolition", 
            price: "3000",
            image: "fondation.jpg",
        },
    ]
};

for (let i of products.data) {
    // Create card element
    let card = document.createElement("div");
    // Add card and category classes
    card.classList.add("card", i.category, "hide");
    // Create image container element
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // Create image element
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    // Append image to image container
    imgContainer.appendChild(image);
    // Append image container to card
    card.appendChild(imgContainer);
    //container 
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productsName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText =   i.price + "DA";
    container.appendChild(price)

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
// ...

// Fonction pour masquer le bouton de téléchargement
function hideDownloadButton() {
    document.getElementById("telech").classList.add("hidden");
}

//parameter passed from button (parameter same as category)
function filterProduct(value) {
  let buttons = document.querySelectorAll("button.button-value");
  buttons.forEach((button) => {
    if (value.toLowerCase() === button.innerText.trim().toLowerCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (value === "all" || card.classList.contains(value)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
}





// Recherche lorsque la touche "Enter" est enfoncée
document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProducts();
    }
});

// Fonction pour rechercher les produits
function searchProducts() {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.toUpperCase().includes(searchInput)) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
}
//search button click
document.getElementById("search").addEventListener ("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element,index) => {
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toUpperCase())){
          //dispaly matching card
          cards[index].classList.remove("hide"); 
        }
        else
        //hide others
        cards[index].classList.add("hide");
    })
});



//initially display all products
window.onload = () => {
    filterProduct("all");
};

// Votre code JavaScript ici
// Fonction pour ouvrir la fenêtre modale
function openModal() {
    document.getElementById("modal").style.display = "block";
  }

  // Fonction pour fermer la fenêtre modale
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  // Fonction pour télécharger le fichier
function downloadFile(event) {
    let fileName = event.target.parentElement.getAttribute('data-file');
    let filePath = 'C:/xampp/htdocs/la 1ere page/' + encodeURIComponent(fileName);
    let downloadLink = document.createElement('a');
    downloadLink.href = filePath;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  // Ajoutez le gestionnaire d'événements pour le clic sur l'icône de téléchargement Revit
  document.querySelector("#icone-ifc").parentElement.addEventListener("click", function(event) {
    event.preventDefault();
    openModal();
    downloadFile(event);
  });

  document.querySelector("#icone-revit").parentElement.addEventListener("click", function(event) {
    event.preventDefault();
    openModal();
    downloadFile(event);
  });

  document.querySelector("#icone-sketchup").parentElement.addEventListener("click", function(event) {
    event.preventDefault();
    openModal();
    downloadFile(event);
  });

  document.querySelector("#icone-archicad").parentElement.addEventListener("click", function(event) {
    event.preventDefault();
    openModal();
    downloadFile(event);
  });

  document.querySelector("#icone-3ds").parentElement.addEventListener("click", function(event) {
    event.preventDefault();
    openModal();
    downloadFile(event);
  });

  document.querySelector("#icone-autocad").parentElement.addEventListener("click", function(event) {
    event.preventDefault();
    openModal();
    downloadFile(event);
  });

  document.querySelector("#icone-rhino").parentElement.addEventListener("click", function(event) {
    event.preventDefault();
    openModal();
    downloadFile(event);
  });

  // Ajoutez le gestionnaire d'événements pour le clic sur le bouton de téléchargement dans la fenêtre modale
  document.querySelector("#modal-download").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    downloadFile(); // Télécharge le fichier
    closeModal(); // Ferme la fenêtre modale
  });

  // Ajoutez le gestionnaire d'événements pour le clic sur le bouton de fermeture dans la fenêtre modale
  document.querySelector("#modal-close").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    closeModal(); // Ferme la fenêtre modale
  });

  




