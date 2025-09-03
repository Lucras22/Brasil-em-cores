// Inicializa o EmailJS
(function () {
  emailjs.init("cC0btLmxh_uBE-Mgh"); // substitua pela sua public key
})();

document.getElementById("form-colaborar").addEventListener("submit", function (e) {
  e.preventDefault();

  const btn = this.querySelector("button");
  const status = document.getElementById("mensagem-status");

  btn.disabled = true;
  status.innerHTML = "Enviando... Aguarde.";

  emailjs.sendForm("service_z6x5x0z", "template_jzth2x8", this)
    .then(function () {
      status.innerHTML = "✅ Obrigado! Sua colaboração foi recebida.";
      btn.disabled = false;
      document.getElementById("form-colaborar").reset();
    }, function (error) {
      console.error("Erro:", error);
      status.innerHTML = "❌ Houve um erro. Tente novamente.";
      btn.disabled = false;
    });
});
