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
  [4, 10, 31, 50, 53, 55],
    [3, 11, 13, 15, 19, 23],
    [1, 2, 11, 12, 24, 25],
    [7, 11, 25, 45, 58, 60],
    [1, 3, 4, 37, 43, 44],
    [1, 14, 23, 46, 50, 56],
    [1, 4, 6, 16, 20, 42],
    [1, 8, 9, 17, 19, 41],
    [1, 6, 8, 10, 46, 51],
    [1, 3, 7, 9, 17, 37],
    [1, 2, 3, 7, 9, 29],
    [5, 6, 13, 19, 20, 21],
    [2, 5, 6, 31, 37, 38],
    [4, 8, 12, 25, 37, 43],
    [23, 25, 36, 40, 57, 60],
    [1, 2, 4, 18, 33, 59],
    [1, 8, 12, 15, 25, 27],
    [2, 12, 15, 24, 30, 31],
    [3, 4, 6, 8, 10, 11],
    [7, 12, 16, 20, 25, 27],
    [2, 5, 12, 32, 48, 55],
    [3, 9, 13, 17, 45, 52],
    [7, 17, 25, 37, 43, 58],
    [3, 4, 7, 46, 51, 59],
    [11, 14, 19, 25, 29, 37],
    [30, 31, 34, 43, 50, 60],
    [3, 10, 34, 35, 46, 56],
    [2, 25, 27, 33, 35, 42],
    [16, 24, 37, 39, 58, 59],
    [6, 7, 27, 44, 45, 47],
    [19, 34, 43, 53, 54, 57],
    [1, 13, 14, 27, 53, 54],
    [10, 16, 23, 34, 44, 47],
    [2, 18, 28, 36, 46, 48],
    [5, 16, 18, 26, 39, 47],
    [6, 7, 9, 15, 25, 31],
    [2, 4, 18, 35, 36, 50],
    [11, 15, 30, 31, 46, 52],
    [12, 20, 39, 54, 57, 59],
    [23, 35, 4, 41, 52, 58],
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
