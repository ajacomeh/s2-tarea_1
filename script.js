window.addEventListener("load", () => {

    let fechaInput =
    document.getElementById("fecha");
    let ahora = new Date();
    let formato =
    ahora.toISOString().slice(0,16);
    fechaInput.value = formato;
});

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");




nombre.addEventListener("input", () => {

    if(nombre.value.trim().length < 3){

        errorNombre.textContent =
        "El nombre debe tener mínimo 3 caracteres";
        nombre.classList.add("input-error");
        nombre.classList.remove("input-success");

    } else {

        errorNombre.textContent = "";
        nombre.classList.remove("input-error");
        nombre.classList.add("input-success");
    }
});




email.addEventListener("input", () => {

    let regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email.value)){
        errorEmail.textContent =
        "Correo electrónico inválido";
        email.classList.add("input-error");
        email.classList.remove("input-success");

    } else {
        errorEmail.textContent = "";
        email.classList.remove("input-error");
        email.classList.add("input-success");
    }
});




password.addEventListener("input", () => {
    if(password.value.length < 6){
        errorPassword.textContent =
        "La contraseña debe tener mínimo 6 caracteres";
        password.classList.add("input-error");
        password.classList.remove("input-success");
    } else {
        errorPassword.textContent = "";
        password.classList.remove("input-error");
        password.classList.add("input-success");
    }
});




document.getElementById("formularioCompra")
.addEventListener("submit", function(e){
    e.preventDefault();
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let terminos = document.getElementById("terminos").checked;
    let mensaje = document.getElementById("mensaje");
    
    let envioSeleccionado =
    document.querySelector('input[name="envio"]:checked');

    if(
        nombre.value.trim().length < 3 ||
        password.value.length < 6
    ){
        mensaje.textContent =
        "Corrige los errores del formulario";
        mensaje.style.color = "red";
        return;
    }

    if(producto === ""){
        mensaje.textContent =
        "Selecciona un producto";
        mensaje.style.color = "red";
        return;
    }

    if(cantidad <= 0){
        mensaje.textContent =
        "Cantidad inválida";
        mensaje.style.color = "red";
        return;
    }

    if(!envioSeleccionado){
        mensaje.textContent =
        "Selecciona un tipo de envío";
        mensaje.style.color = "red";
        return;
    }

    if(!terminos){
        mensaje.textContent =
        "Debes aceptar los términos";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent =
    `Compra realizada: ${producto} x${cantidad} 🚀`;
    mensaje.style.color = "#22c55e";
});