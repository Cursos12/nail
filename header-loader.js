function ativarMenuResponsivo() {
  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector("nav.menu");

  toggleButton?.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
document.getElementById("carregando").style.display = "none";
document.getElementById("conteudo").style.display = "block";
document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("header-placeholder");
  const conteudo = document.getElementById("conteudo");

  if (!placeholder || !conteudo) return;

  fetch("/header.html")
    .then(res => res.text())
    .then(data => {
      placeholder.innerHTML = data;
      ativarMenuResponsivo();
      conteudo.style.display = "block"; // só mostra o conteúdo depois do header
    })
    .catch(err => {
      console.error("Erro ao carregar o header:", err);
      conteudo.style.display = "block"; // garante que o conteúdo apareça mesmo com erro
    });
});