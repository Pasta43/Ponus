docReady(function () {
let cards = document.getElementsByClassName("cuadricula")[0]
  postulants.forEach((postulant) => {
    
    let txt = `
        <center><img class="imgRedonda" src="${postulant.photo}" alt="Avatar">
            <p>Nombre: ${postulant.name}</p>
            <p>Cargo: ${postulant.charge}</p>
            <a href="PerfilUnico.html?id=${postulant.id}" class="botonPerfil" id="botonPerfil">Ver perfil</a>
        </center>
        `;
        let card = document.createElement('div');
        card.className = 'mini';
        card.innerHTML=txt;
        cards.appendChild(card);
  });
});
