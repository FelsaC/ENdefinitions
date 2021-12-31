const cardSection = document.querySelector("[data-container='random-cards']");
console.log(cardSection);

/*<div class="card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button href="#" class="btn btn-outline-dark">Remove</button>
      </div>
  </div>
    <div class="spinner-border" role="status">
       <span class="visually-hidden">Loading...</span>
    </div> 
  
  */ 

async function newRandomWordDef(container) {
    let card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute("style", "width: 18rem");
    card.innerHTML = `
        <div class="d-flex justify-content-center custom-spinner" data-container="loading">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>`
    ;

    container.appendChild(card);

    fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "bec3f1a7a8mshb9d8e1147d7b805p1d21d4jsn9f2f8cfd64c3"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("error", err))


}

newRandomWordDef(cardSection);
newRandomWordDef(cardSection);
newRandomWordDef(cardSection);
