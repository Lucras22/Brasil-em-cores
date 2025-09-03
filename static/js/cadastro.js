document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const artista1 = document.getElementById("artista1").value.trim();
    const artista2 = document.getElementById("artista2").value.trim();
    const artista3 = document.getElementById("artista3").value.trim();
    const fotoInput = document.getElementById("foto");

    // Converter a foto em Base64
    let fotoBase64 = "";
    if (fotoInput.files.length > 0) {
      const file = fotoInput.files[0];
      fotoBase64 = await toBase64(file);
    }

    const userData = {
      nome,
      email,
      senha,
      artistas: [artista1, artista2, artista3],
      foto: fotoBase64
    };

    // Salva no localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
  });

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
});
