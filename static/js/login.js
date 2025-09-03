document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!storedData) {
      alert("Nenhum usuário cadastrado. Faça seu cadastro primeiro.");
      window.location.href = "cadastro.html";
      return;
    }

    if (storedData.email === email && storedData.senha === senha) {
      // Marca como logado com a mesma chave que o auth.js espera
      localStorage.setItem("loggedUser", email);
      alert("Login realizado com sucesso!");
      window.location.href = "perfil.html";
    } else {
      alert("E-mail ou senha incorretos.");
    }
  });
});
