const searchButton = document.querySelector("[data-input='search-button']");
const searchInput = document.querySelector("[data-input='search-text']");
const loadingWhell = document.querySelector("[data-container='loading']");

searchButton.addEventListener("click", () => searchAndCreate(searchInput.value.trim()));

async function searchAndCreate(word) {
    loadingWhell.classList.remove("custom-hidden")
    
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
    console.log(data);

    definitionContainer.innerHTML = "";

    //creating definition card
    if(data.word) {
        let card = document.createElement("div");
        let cardBody = document.createElement("div");
        card.classList.add("card", "no-border-custom");
        card.classList.add("card-body");

        cardBody.innerHTML = `<h5 class="card-title card-title-custom">${data.word}</h5>`;

        let count = 0;
        data.definitions.forEach(definitionObj => {
            count++
            cardBody.innerHTML += `<p class="card-text custom-card-text">${count}. ${definitionObj.definition}. <span class="custom-partOfspeech">${definitionObj.partOfSpeech}</span></p>`
        })

        card.appendChild(cardBody);
        definitionContainer.appendChild(card);
    } else {
        definitionContainer.innerHTML= "<h3 class='not-found'> word not found </h3>"
    }


    //hidding loding well
    loadingWhell.classList.add("custom-hidden");
}




