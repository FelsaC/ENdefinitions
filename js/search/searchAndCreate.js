import {toggleLoadingWhell} from "./extra.js";
import createDefinitionCard from "./createDefinitionCard.js";

export default async function searchAndCreate(word) {
    toggleLoadingWhell();
    
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