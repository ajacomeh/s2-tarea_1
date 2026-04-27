// FECHA AUTOMÁTICA
window.addEventListener("load", () => {
    let fechaInput = document.getElementById("fecha");
    let ahora = new Date();

    let formato = ahora.toISOString().slice(0,16);
    fechaInput.value = formato;
});

// VALIDACIÓN
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let terminos = document.getElementById("terminos").checked;
    let mensaje = document.getElementById("mensaje");

    if (!nombre || !email || !password || !producto) {
        mensaje.textContent = "Completa todos los campos";
        mensaje.style.color = "red";
        return;
    }

    if (cantidad <= 0) {
        mensaje.textContent = "Cantidad inválida";
        mensaje.style.color = "red";
        return;
    }

    if (!terminos) {
        mensaje.textContent = "Debes aceptar los términos";
        mensaje.style.color = "red";
        return;
    }

    mensaje.textContent = `Compra realizada: ${producto} x${cantidad} 🛒`;
    mensaje.style.color = "#22c55e";
});