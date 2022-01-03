import {toggleLoadingWhell} from "./extra.js"

export default function createDefinitionCard(data) {
    //limpeza da pesquisa anterior
    const definitionContainer = document.querySelector("[data-container='card']");
    definitionContainer.innerHTML = "";

    //Criação do card da nova pesquisa
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


    //removendo loading
    toggleLoadingWhell();
}