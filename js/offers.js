

docReady(function () {
  let container = document.getElementById("cardsOffer");
  offers.forEach((offer) => {
    let txt = `
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">${offer.title}</h5>
                            <p><a href="offer.html?offer=${offer.id}" class="btn btn-primary">Descripción</a></p>
                            <p><a href="postulants.html?offer=${offer.id}" class="btn btn-secondary">Postulantes</a></p> 
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
