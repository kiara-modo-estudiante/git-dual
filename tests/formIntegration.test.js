global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const { JSDOM } = require("jsdom");
const { validarFormulario } = require("../js/script");

describe("Pruebas de integración del formulario", () => {
  let dom, document, form, mensaje;

  beforeEach(() => {
    dom = new JSDOM(
      `<!DOCTYPE html><html><body>
      <form id="contactForm">
        <input type="text" id="nombre" />
        <input type="email" id="email" />
        <button type="submit">Enviar</button>
      </form>
      <p id="mensaje"></p>
      <script>
        document.getElementById("contactForm").addEventListener("submit", function (event) {
          event.preventDefault();
          const nombre = document.getElementById("nombre").value.trim();
          const email = document.getElementById("email").value.trim();
          if (${validarFormulario.toString()}(nombre, email)) {
            document.getElementById("mensaje").textContent = "Formulario enviado correctamente.";
          } else {
            document.getElementById("mensaje").textContent = "Por favor, completa los campos correctamente.";
          }
        });
      </script>
    </body></html>`,
      { runScripts: "dangerously" }
    );

    document = dom.window.document;
    form = document.getElementById("contactForm");
    mensaje = document.getElementById("mensaje");
  });

  test("El formulario muestra mensaje de éxito al enviar datos correctos", () => {
    document.getElementById("nombre").value = "Juan";
    document.getElementById("email").value = "juan@example.com";

    form.dispatchEvent(new dom.window.Event("submit"));

    expect(mensaje.textContent).toBe("Formulario enviado correctamente.");
  });
});
