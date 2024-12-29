// Simula credenciais de login
const validUsername = "Virada";
const validPassword = "mudardevida";

// Manipula as telas de login e verificador
const loginContainer = document.getElementById("login-container");
const verificadorContainer = document.getElementById("verificador-container");

// Login
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  errorMessage.textContent = "";

  if (username === validUsername && password === validPassword) {
    loginContainer.classList.add("hidden");
    verificadorContainer.classList.remove("hidden");
  } else {
    errorMessage.textContent = "Usuário ou senha inválidos.";
  }
});

// Verificador de Acertos
const blocos = [
  [6, 13, 34, 45, 47, 51, 57],
  [2, 3, 13, 23, 25, 31, 43],
  [1, 3, 21, 39, 44, 51, 56],
  [3, 13, 19, 31, 32, 49, 60],
  [11, 19, 26, 36, 46, 48, 59],
  [3, 9, 10, 16, 32, 35, 51],
];

const inputFields = document.getElementById("input-fields");
for (let i = 0; i < 6; i++) {
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "0";
  inputFields.appendChild(input);
}

function verificarNumeros() {
  const inputs = Array.from(inputFields.querySelectorAll("input"));
  const numerosUsuario = inputs.map((input) => parseInt(input.value) || 0);
  const errorMessage = document.getElementById("verificador-error-message");
  const resultsContainer = document.getElementById("results");
  const successMessage = document.getElementById("success-message");

  errorMessage.textContent = "";
  resultsContainer.innerHTML = "";
  successMessage.textContent = "";
  successMessage.style.display = "none";

  if (numerosUsuario.some((num) => num === 0)) {
    errorMessage.textContent = "Por favor, preencha todos os 6 números.";
    return;
  }

  let acertouTudo = false;
  const acertos = blocos.map((bloco, index) => {
    const acertos = bloco.filter((num) => numerosUsuario.includes(num)).length;
    if (acertos === 6) acertouTudo = true;
    return { jogo: index + 1, acertos };
  });

  acertos.forEach(({ jogo, acertos }) => {
    const resultDiv = document.createElement("div");
    resultDiv.className = "result";
    resultDiv.textContent = `JOGO ${jogo}: ${acertos} acertos`;
    resultsContainer.appendChild(resultDiv);
  });

  if (acertouTudo) {
    successMessage.textContent = "Parabéns! Você acertou todos os 6 números em um dos jogos!";
    successMessage.style.display = "block";
    successMessage.className = "success";
  }
}
