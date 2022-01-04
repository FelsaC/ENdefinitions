const form = document.querySelector("[data-form='contact']");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const objFormData = Object.fromEntries(formData);
    fetch("https://prog-bolsas-api.herokuapp.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }, 
        "body": JSON.stringify(objFormData), 
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})