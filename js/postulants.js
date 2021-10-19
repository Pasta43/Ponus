docReady(function () {
  let cards = document.getElementsByClassName("cuadricula")[0];
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("offer")) {
    let offerId = searchParams.get("offer");
    printJustOffer(cards, parseInt(offer));
  } else {
    printAllOffers(cards);
  }
});

function printAllOffers(cards) {
  postulants.forEach((postulant) => {
    let txt = `
        
        <center><img class="imgRedonda" src="${postulant.photo}" alt="Avatar">
            <p>Nombre: ${postulant.name}</p>
            <p>Cargo: ${postulant.charge}</p>
            <a href="PerfilUnico.html?id=${postulant.id}" class="botonPerfil" id="botonPerfil">Ver perfil</a>
        </center>
        `;
    let card = document.createElement("div");
    card.className = "mini col-md-4";
    card.innerHTML = txt;
    cards.appendChild(card);
  });
}

function printJustOffer(cards, id) {
  postulants.forEach((postulant) => {
    if (postulant.offerId === id) {
      let txt = `
        
        <center><img class="imgRedonda" src="${postulant.photo}" alt="Avatar">
            <p>Nombre: ${postulant.name}</p>
            <p>Cargo: ${postulant.charge}</p>
            <a href="PerfilUnico.html?id=${postulant.id}" class="botonPerfil" id="botonPerfil">Ver perfil</a>
        </center>
        `;
      let card = document.createElement("div");
      card.className = "mini col-md-4";
      card.innerHTML = txt;
      cards.appendChild(card);
    }
  });
}
