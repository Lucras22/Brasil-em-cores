document.addEventListener("DOMContentLoaded", () => {
  const loggedUser = localStorage.getItem("loggedUser"); // MESMA CHAVE DO LOGIN
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!loggedUser || !userData) {
    alert("Você precisa estar logado para acessar o perfil.");
    window.location.href = "login.html";
    return;
  }

  // Exibir dados do usuário
  document.getElementById("fotoPerfil").src = userData.foto || "https://via.placeholder.com/120";
  document.getElementById("nomePerfil").textContent = userData.nome;
  document.getElementById("emailPerfil").textContent = userData.email;

  const artistasList = document.getElementById("artistasPerfil");
  artistasList.innerHTML = "";
  userData.artistas.forEach(art => {
    if (art) {
      const li = document.createElement("li");
      li.textContent = art;
      artistasList.appendChild(li);
    }
  });

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedUser");
      alert("Você saiu da sua conta.");
      window.location.href = "login.html";
    });
  }

  // Formulário de edição
  const editarForm = document.getElementById("editarForm");
  if (editarForm) {
    editarForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const senhaConfirm = document.getElementById("senhaConfirm").value;
      if (senhaConfirm !== userData.senha) {
        alert("Senha incorreta. Alterações não salvas.");
        return;
      }

      const editNome = document.getElementById("editNome").value.trim();
      const editEmail = document.getElementById("editEmail").value.trim();
      const editArtista1 = document.getElementById("editArtista1").value.trim();
      const editArtista2 = document.getElementById("editArtista2").value.trim();
      const editArtista3 = document.getElementById("editArtista3").value.trim();
      const fotoInput = document.getElementById("editFoto");

      let newFoto = userData.foto;
      if (fotoInput.files.length > 0) {
        newFoto = await toBase64(fotoInput.files[0]);
      }

      const updatedData = {
        ...userData,
        nome: editNome,
        email: editEmail,
        artistas: [editArtista1, editArtista2, editArtista3],
        foto: newFoto
      };

      localStorage.setItem("userData", JSON.stringify(updatedData));
      alert("Perfil atualizado com sucesso!");
      location.reload();
    });
  }

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
});
