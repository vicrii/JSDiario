function createDivForm() {
        const divForm = document.createElement("div");
        divForm.classList.add("form-container");

    const form = document.createElement("form");
    form.classList.add("form");

        const label = document.createElement("label");
        label.textContent = "Correo electrónico";

        const input = document.createElement("input");
    input.classList.add("form-input");
    input.type = "email";
    input.name = "email";
    input.id = "email";
    input.placeholder = "Ingrese su correo electrónico";

    // Crear elemento para mostrar error
    const errorMessage = document.createElement("span");
    errorMessage.classList.add("error-message");
    errorMessage.style.color = "red";
    errorMessage.style.display = "none";

    // Agregar elementos al DOM
    divForm.appendChild(form);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(errorMessage);
    
    // logica de validacion con expresiones regulares
    input.addEventListener("input", (e) => {
        const email = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMessage.textContent = "Por favor, ingrese un correo electrónico válido";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }
    });
    
    return divForm;
}

export default createDivForm;