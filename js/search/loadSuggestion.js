import { toggleSuggestion } from "./extra.js"

export default async function loadSuggestion (input) {
    if(input.value == "") {
        fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                    "x-rapidapi-key": "bec3f1a7a8mshb9d8e1147d7b805p1d21d4jsn9f2f8cfd64c3"
            }
        })
        .then(response => response.json()) 
        .then(data => placeSuggestion(data, input))
        .catch(err => console.log("error: ", err))
    }
}

function placeSuggestion(data, input) {
    if (input.value == "") {
        toggleSuggestion(false);
        input.value = data.word;
    }
}
