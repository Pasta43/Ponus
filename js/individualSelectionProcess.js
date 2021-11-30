docReady(function () {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("id")) {
    let id = searchParams.get("id");
    let individual = findIndividualProcess(parseInt(id));
    processId = individual.processId;
    process = findSelectionProcess(processId);
    offer = findOffer(process.offerId);
    let stages = process.stages;
    postulantId = individual.postulantId;
    let profile = findProfile(postulantId);
    loadStages(stages, individual);
    loadProfile(profile, process, offer);
  }
});

function findIndividualProcess(id) {
  for (let i = 0; i < individualSelectionProcesses.length; i++) {
    let selectionProcess = individualSelectionProcesses[i];
    if (selectionProcess.id === id) {
      return selectionProcess;
    }
  }
}
function findSelectionProcess(id) {
  for (let i = 0; i < selectionProcesses.length; i++) {
    let selectionProcess = selectionProcesses[i];
    if (selectionProcess.id === id) {
      return selectionProcess;
    }
  }
}

function findProfile(id) {
  for (let i = 0; i < postulants.length; i++) {
    let postulant = postulants[i];
    if (postulant.id === id) {
      return postulant;
    }
  }
}

function findOffer(id) {
  for (let i = 0; i < offers.length; i++) {
    let offer = offers[i];
    if (offer.id === id) {
      return offer;
    }
  }
}

function loadStages(stages, individual) {
  let txt = "<h2>Etapas</h2>";
  let stagesContainer = document.getElementById("process");
  let checked = 'checked="checked" disabled';
  for (let i = 0; i < stages.length; i++) {
    let stage = stages[i];
    let actual = 0;
    let finalDeadline = "";
    if (individual.stage === stage.id) {
      actual = "active";
      checked = "";
      deadline = individual.deadline.split("-");
      if (deadline.length === 0 || deadline.length === 1 ) {
        finalDeadline = "Sin fecha límite";
      } else {
        finalDeadline = getDateAsString(deadline, "es");
      }
    }

    txt += `<a href="#" class="list-group-item list-group-item-action ${actual}" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${stage.name}</h5>
            <input type="checkbox" ${checked} >
        </div>
        <p class="mb-1">${stage.description}</p>
        <small>${finalDeadline}</small>
        </a>`;
  }
  stagesContainer.innerHTML = txt;
}

function loadProfile(profile, process, offer) {
  let txt = `
    <img src="${profile.photo}" alt="avatar" class="img-fluid rounded-circle">
    <div class="d-grid gap-2 mx-auto">
        <div class="text-center">
            <p>${profile.name}</p>
            <p>${offer.title}</p>
        </div>
        <button class="btn btn-primary">
            Ver perfil
        </button>
        <button class="btn btn-danger">
            Rechazar
        </button>
    </div>
        `;
  let profileContainer = document.getElementById("profile");
  profileContainer.innerHTML = txt;
}
