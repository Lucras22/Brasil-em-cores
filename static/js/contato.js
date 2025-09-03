// INICIALIZA O EMAILJS
(function() {
  emailjs.init("cC0btLmxh_uBE-Mgh"); // substitua pela sua public key do emailjs
})();

document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = this.querySelector("button");
  const status = document.getElementById("msg-status");

  btn.disabled = true;
  status.innerHTML = "Enviando...";

  emailjs.sendForm('service_z6x5x0z', 'template_e9v0mns', this)
    .then(function() {
      status.innerHTML = "Mensagem enviada com sucesso! ✅";
      btn.disabled = false;
      document.getElementById('form-contato').reset();
    }, function(error) {
      console.error("Erro:", error);
      status.innerHTML = "Erro ao enviar. Tente novamente. ❌";
      btn.disabled = false;
    });
});
