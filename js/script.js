document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();

    if (validarFormulario(nombre, email)) {
      mensaje.textContent = "Formulario enviado correctamente.";
      mensaje.style.color = "green";
    } else {
      mensaje.textContent = "Por favor, completa los campos correctamente.";
      mensaje.style.color = "red";
    }
  });
});

/**
 * Función de validación para el formulario.
 * @param {string} nombre - Nombre ingresado
 * @param {string} email - Email ingresado
 * @returns {boolean} - True si es válido, False si no.
 */
function validarFormulario(nombre, email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return nombre.length > 0 && emailRegex.test(email);
}

// Exportamos la función para las pruebas en Jest
if (typeof module !== "undefined") {
  module.exports = { validarFormulario };
}
