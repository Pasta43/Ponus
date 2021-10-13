var offers = [
  {
    id: 1,
    title: "Ingeniero de sistemas",
  },
  {
    id: 2,
    title: "Contador Público",
  },
  {
    id: 3,
    title: "Agente de call center",
  },
  {
    id: 4,
    title: "Marketing"
  },
  {
    id:5,
    title: "Publicista"
  },
  {
      id:6,
      title: "Gerente comercial"
  }

];

docReady(function () {
  let container = document.getElementById("cardsOffer");
  offers.forEach((offer) => {
    let txt = `
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">${offer.title}</h5>
                            <p><a href="offer.html?${offer.id}" class="btn btn-primary">Descripción</a></p>
                            <p><a href="postulants.html?${offer.id}" class="btn btn-secondary">Postulantes</a></p> 
                        </div>
                    </div>
    `;
    let card = document.createElement('div');
    card.className='col-md-4';
    card.innerHTML=txt;
    container.append(card);
    console.log(card)
  });
});
