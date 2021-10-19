docReady(function () {
  let cards = document.getElementsByClassName("cuadricula")[0];
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("offer")) {
    let offerId = searchParams.get("offer");
    let title= document.getElementsByTagName('h1')[0];
    let offer = findOffer(parseInt(offerId));
    title.innerHTML='Postulantes para '+offer.title
    printJustOffer(cards, parseInt(offerId));
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

  let justOfferPostulants= findPostulantsByOffer(id);
  if(justOfferPostulants){
    alert('Por ahora, no hay postulantes para esta oferta');
    window.location.assign('postulants.html')
  }
  justOfferPostulants.forEach((postulant) => {
    
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

function findPostulantsByOffer(offerId){
  let offerProcess=findProcessByOffer(offerId);
  if(offerProcess){
    let postulantsByProcess=findPostulantsByProcess(offerProcess);
    return postulantsByProcess
  }
  
  return [];
}



function findProfile(id){

}

function findPostulantsByProcess(process){
  let postulantsByProcess=[];
  for (let i = 0; i < individualSelectionProcesses.length; i++) {
    let individual= individualSelectionProcesses[i];
    if (process.id=== individual.processId) { 
      postulantsByProcess.push(individual);
    }
  }
  let justThePostulants = [];
  postulantsByProcess.forEach((postulantByProcess)=>{
    for (let i = 0; i < postulants.length; i++) {
      let postulant = postulants[i];
      if (postulant.id===postulantByProcess.postulantId){
        justThePostulants.push(postulant);
      }
    }
  })
  return justThePostulants;
}

function findProcessByOffer(id){
  for (let i = 0; i < selectionProcesses.length; i++) {
    let process= selectionProcesses[i];
    if (process.offerId === id) { 
      return process
    }
  }
}

function findOffer(id) {
  for (let i = 0; i < offers.length; i++) {
    const offer = offers[i];
    if(offer.id === id){
      return offer;
    }
    
  }

}