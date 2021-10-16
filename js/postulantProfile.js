docReady(function () {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("id")) {
    let id = searchParams.get("id");
    findProfile(parseInt(id));
  }
});

function findProfile(id) {
  let container = document.getElementsByClassName("ColumnaPerfil")[0];
  for (let i = 0; i < postulants.length; i++) {
    let postulant = postulants[i];
    if (postulant.id == id) {
        console.log(postulant)
        let txt = `
                <center>
                    <img class="imgRedonda2" src="${postulant.photo}" alt="Avatar">
                    <p>${postulant.name}</p>
                    <p>${postulant.charge}</p>
                    <br>

                    <a class="botonPerfil">Iniciar Proceso</a>
                    <br>
                    <br>
                    <br>
                    <a class="botonRechazar">Rechazar</a>
                </center>

                <div class="mini2">
                    <center>
                        <p>${postulant.charge} </p>
                        <p>${postulant.name}</p>
                        <br>
                        <br>
                        <br>
                        <br>
                        <p>${postulant.info}</p>
                    </center>
                    <center>
                    </center>
                </div>
                `;

        container.innerHTML = txt;
        break;
    }
  }
}
