const form = document.querySelector("[data-form='contact']");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const objFormData = Object.fromEntries(formData);
    console.log(JSON.stringify(objFormData));

    fetch("https://prog-bolsas-api.herokuapp.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, 
        "body": JSON.stringify(objFormData), 
    })
    .then(response => response.json())
    .catch(error => console.log(error))
})