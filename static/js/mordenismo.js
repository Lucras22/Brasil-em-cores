function toggleDescricao(id) {
  const desc = document.getElementById("desc-" + id);
  const todasDescricoes = document.querySelectorAll(".obra-descricao");

  todasDescricoes.forEach(div => {
    if (div.id !== "desc-" + id) {
      div.style.display = "none";
    }
  });

  // Alterna visibilidade
  if (desc.style.display === "block") {
    desc.style.display = "none";
  } else {
    desc.style.display = "block";
  }
}
