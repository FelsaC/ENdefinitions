export function removeExtraWhiteSpaces(string) {
    return string.replace(/\s+/g,' ').trim(); 
}

export function toggleLoadingWhell () {
    const loadingWhell = document.querySelector("[data-container='loading']");
    loadingWhell.classList.toggle("d-none");
}