function showAlert() {
  alert("Hola, esta es mi alerta desde JavaScript!");
}

const miBoton = document.getElementById("miBoton");
function handleClick() {
  alert("Hola! Has hecho clic en en el boton.");
}
miBoton.addEventListener("click", handleClick);

const form = document.getElementById("myForm");
form.addEventListener("submit", function (parametro) {
  parametro.preventDefault();
  validateForm();
});

function validateForm() {
  const input = document.getElementById("email");
  const inputValue = input.value;

  if (!validateEmail(inputValue)) {
    alert("Por favor ingrese un correo electronico válido.");
  } else {
    alert("Correo electronico enviado corretamente.");
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})