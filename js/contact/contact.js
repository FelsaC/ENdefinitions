const form = document.querySelector("[data-form='contact']");
const returnMessage = document.querySelector("[data-container='result']");
returnMessage.textContent = "";

form.addEventListener("submit", (e) => {
    e.preventDefault()
    toggleLoadingWhell()

    const formData = new FormData(e.target);
    const objFormData = Object.fromEntries(formData);
    contactPush(objFormData, form, returnMessage);
})

async function contactPush(objFormData, form, returnMessage) {
    fetch("https://prog-bolsas-api.herokuapp.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, 
        "body": JSON.stringify(objFormData), 
    })
    .then(response => response.json())
    .then(data => pushSuccess(data, form, returnMessage))
    .catch(error => pushFail(returnMessage))
}

function toggleLoadingWhell () {
    const loadingWhell = document.querySelector("[data-container='loading']");
    loadingWhell.classList.toggle("d-none");
}

function pushSuccess(data, form, returnMessage) {
    if (data.success) {
        form.reset();
        toggleLoadingWhell();
        returnMessage.textContent = "Succes form sent!";
        returnMessage.style.color = "green"; 
    } else {
        pushFail(returnMessage);
    }
}

function pushFail (returnMessage) {
    returnMessage.textContent = "Error form not sent!";
    returnMessage.style.color = "red";
}