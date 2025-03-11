const { validarFormulario } = require("../js/script");

test("Validación correcta con datos válidos", () => {
  expect(validarFormulario("Juan", "juan@example.com")).toBe(true);
});

test("Debe fallar si el nombre está vacío", () => {
  expect(validarFormulario("", "juan@example.com")).toBe(false);
});

test("Debe fallar si el email es inválido", () => {
  expect(validarFormulario("Juan", "correo-invalido")).toBe(false);
});
