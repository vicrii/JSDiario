export function createFormComponent() {
    const divForm = document.createElement("div");
    divForm.classList.add("form-container");
    divForm.id = "form-container";
    // crear el form
    const form = document.createElement("form");
    form.classList.add("form");
    form.id = "form";
    // USERNAME INPUT
    const inputUsername = document.createElement("input");
    inputUsername.type = "text";
    inputUsername.name = "username";
    inputUsername.id = "username";
    inputUsername.placeholder = "Ingrese su nombre de usuario";
    // input password
    const inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.name = "password";
    inputPassword.id = "password";
    inputPassword.placeholder = "Ingrese su contraseña";
    const buttonSubmit = document.createElement("button");  
    buttonSubmit.type = "submit";
    buttonSubmit.textContent = "Enviar";
    buttonSubmit.classList.add("form-button");

    // Agregar clases a los inputs
    inputUsername.classList.add("form-input");
    inputPassword.classList.add("form-input");

    // Agregar todos los elementos al form y el form al contenedor
    form.append(inputUsername, inputPassword, buttonSubmit);
    divForm.appendChild(form);
    
    return divForm;
}