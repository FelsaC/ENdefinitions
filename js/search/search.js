import searchAndCreate from "./searchAndCreate.js";
import {removeExtraWhiteSpaces} from "./extra.js";
import loadSuggestion from "./loadSuggestion.js";
import { toggleSuggestion } from "./extra.js";

const searchInput = document.querySelector("[data-input='search-text']");
const searchForm = document.querySelector("[data-form='search']");

loadSuggestion(searchInput); 

searchInput.addEventListener("focus", () => toggleSuggestion(true))

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    toggleSuggestion(true);
    let word = removeExtraWhiteSpaces(searchInput.value);
    searchAndCreate(word);
});

