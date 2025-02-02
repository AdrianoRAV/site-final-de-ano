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
    [4,5,6,7,9,11,12,14,17,18,20,21,22,24,25],
    [3,4,6,7,8,10,11,13,15,16,19,20,21,23,25],
    [2,3,5,6,8,9,11,12,14,16,18,20,21,23,25],
    [1,4,5,6,8,9,10,11,12,13,16,18,19,21,25],
    [1,3,5,6,7,9,10,12,13,14,16,19,20,22,24],
    [3,4,6,7,8,9,10,11,13,15,16,17,18,20,21],
    [1,2,3,4,5,7,9,10,11,14,15,16,20,22,25],
    [1,2,3,4,5,7,8,11,12,13,17,19,21,22,23],
    [1,7,10,11,12,13,14,17,18,19,20,21,22,23,24],
    [1, 3, 5,7,8,9,10,12,13,15,16,17,19,22,23],
    [1, 2, 4,6,7,8,11,12,13,15,17,18,20,21,24],
    [1,2,3,7,9,10,11,12,14,15,17,18,20,21,22],
    [1,2,3,5,6,7,8,9,10,13,14,15,16,17,25],
    [2,3,6,7,9,10,11,12,14,15,16,19,21,22,23],
    [1,4,5,8,13,14,15,17,18,20,21,22,24,25],
    [1,3,7,9,11,12,13,15,16,17,19,20,23,24,25],
    [2,4,5,7,8,10,12,14,17,18,19,20,21,24,25],
    [3,4,6,7,9,10,11,1,16,18,19,21,23,24,25],
    [1,3,5,7,8,10,12,13,15,17,19,20,21,22,23],
    [2,4,6,8,9,11,13,15,17,19,21,22,23,24,25],
    [1,3,4,6,8,9,10,11,13,14,16,19,20,21,22],
    [1,6,7,8,12,13,14,18,19,20,21,22,23,24,25],
    [3,7,8,9,11,13,15,16,17,19,20,21,22,24,25],
    [4,5,6,8,10,11,13,14,16,17,18,20,22,23,25],
    [1,2,3,5,6,7,8,10,11,12,13,15,18,24,25],
    [1,3,6,7,8,10,11,12,13,15,19,20,21,23,24],
    [1,2,3,4,5,7,8,9,13,14,15,17,21,22,24],
    [1,3,6,7,8,9,11,12,15,16,19,21,23,24,25],
    [2,4,5,6,7,8,9,11,12,13,14,15,18,19,22],
    [1,3,4,5,6,7,8,9,10,11,12,14,16,17,21],
    [4,8,9,10,12,13,15,16,18,19,20,22,23,24,25],
    [1, 5,6,8,10,12,13,14,16,17,19,20,21,23,25],
    [1,2,3,4,5,9,10,11,12,13,15,16,17,18,19],
    [5,6,7,8,9,10,11,12,13,15,17,21,23,24,25],
    [2,3,4,6,7,9,10,11,12,14,15,16,19,20,24,25],
    [1,3,5,6,8,10,11,13,15,16,18,20,21,23,25],
    [1,5,6,7,10,12,14,15,16,17,18,19,23,24,25],
    [4,6,8,9,12,13,14,16,17,18,19,20,22,23,24],
    [3,6,7,8,9,11,12,14,15,16,18,19,20,21,22],
    [1,2,5,6,7,9,11,13,15,16,17,19,22,24,25],
    [1,2,3,6,8,11,13,14,15,17,19,20,21,23,24],
    [2,3,5,7,9,10,13,14,15,16,18,20,22,23,25],
    [1,5,7,8,9,10,11,12,14,15,17,18,19,21,25],
    [2,3,4,5,6,7,10,13,15,16,20,22,23,24,25],
  [1,2,4,5,7,9,10,11,13,15,17,18,21,23,25],
  [2,3,4,7,8,9,11,12,13,15,17,18,22,23,25],
  [1,2,3,5,6,10,11,12,17,18,19,20,21,22,24],
  [2,3,4,5,7,9,12,14,15,16,17,18,21,22,23],
  [1,2,3,4,5,6,8,10,12,15,16,17,18,19,20],
  [2,3,4,5,10,11,12,13,14,15,16,20,21,22,23],
  [1,2,4,5,6,7,8,9,10,11,12,22,23,24,25],
  [1,2,3,6,7,8,11,12,13,16,17,19,20,24,25],
  [1,3,4,5,6,8,10,11,12,16,17,19,22,23,25],
  [1,2,4,5,7,9,11,12,15,16,17,19,21,22,25],
  
];

const inputFields = document.getElementById("input-fields");
for (let i = 0; i < 15; i++) {
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
    if (acertos === 15) acertouTudo = true;
    return { jogo: index + 1, acertos };
  });

  acertos.forEach(({ jogo, acertos }) => {
    const resultDiv = document.createElement("div");
    resultDiv.className = "result";
    resultDiv.textContent = `JOGO ${jogo}: ${acertos} acertos`;
    resultsContainer.appendChild(resultDiv);
  });

  if (acertouTudo) {
    successMessage.textContent = "Parabéns! Você acertou todos os 15 números em um dos jogos!";
    successMessage.style.display = "block";
    successMessage.className = "success";
  }
}
