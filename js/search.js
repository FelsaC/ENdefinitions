const searchButton = document.querySelector("[data-input='search-button']");
const searchInput = document.querySelector("[data-input='search-text']");

searchButton.addEventListener("click", () => searchAndCreate(searchInput.value));

async function searchAndCreate(word) {
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com", 
            "x-rapidapi-key": "bec3f1a7a8mshb9d8e1147d7b805p1d21d4jsn9f2f8cfd64c3"
        }
    })
    .then(response => response.json())
    .then(data => createDefinitionCard(data))
    .catch(err => {
        console.log("error:", err)
    })
}

function createDefinitionCard(data) {
    const definitionContainer = document.querySelector("[data-container='card']");

    definitionContainer.innerHTML = "";

    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    card.classList.add("card-body");

    cardBody.innerHTML = `<h5 class="card-title card-title-custom">${data.word}</h5>`;
    data.definitions.forEach(definitionObj => cardBody.innerHTML += `<p class="card-text">${definitionObj.definition}</p>`)

    card.appendChild(cardBody);

    definitionContainer.appendChild(card);
    
}

