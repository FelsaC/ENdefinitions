import searchAndCreate from "./searchAndCreate.js";
import {removeExtraWhiteSpaces} from "./extra.js";

const searchInput = document.querySelector("[data-input='search-text']");
const searchForm = document.querySelector("[data-form='search']");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let word = removeExtraWhiteSpaces(searchInput.value);
    searchAndCreate(word);
});

