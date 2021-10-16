docReady(function () {
let cards = document.getElementsByClassName("cuadricula")[0]
let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("offer")) {
    let id = searchParams.get("id");
    findProfile(parseInt(id));
  }
  postulants.forEach((postulant) => {
    
    let txt = `
        
        <center><img class="imgRedonda" src="${postulant.photo}" alt="Avatar">
            <p>Nombre: ${postulant.name}</p>
            <p>Cargo: ${postulant.charge}</p>
            <a href="PerfilUnico.html?id=${postulant.id}" class="botonPerfil" id="botonPerfil">Ver perfil</a>
        </center>
        `;
        let card = document.createElement('div');
        card.className = 'mini col-md-4';
        card.innerHTML=txt;
        cards.appendChild(card);
  });
});
