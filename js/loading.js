// Variável global para controlar o loading
let loadingScreen = null;

// Função para MOSTRAR o loading
function showLoading(message = "Carregando...") {
  // Evita criar múltiplos loadings
  if (document.getElementById('loading-screen')) return;
  
  loadingScreen = document.createElement('div');
  loadingScreen.id = 'loading-screen';
  loadingScreen.innerHTML += `<div class="loading-bar"></div>`;
  document.body.appendChild(loadingScreen);
}

// Função para ESCONDER o loading
function hideLoading() {
  if (loadingScreen) {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.remove();
      loadingScreen = null;
    }, 500);
  }
}

// ===== USO PRÁTICO ===== //

// Exemplo 1: Loading durante o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
  showLoading("Preparando conteúdo...");
  
  // Simula carregamento de vários elementos
  setTimeout(() => {
    // Carrega cursos
    fetch('../cursos.json')
      .then(response => response.json())
      .then(data => {
        window.cursos = data;
        if (typeof mostrarCursos === 'function') mostrarCursos();
      })
      .catch(error => {
        console.error("Erro ao carregar cursos:", error);
        window.cursos = []; // Fallback
      })
      .finally(hideLoading);
  }, 100);
});

// Exemplo 2: Loading para qualquer evento (ex.: botão)
document.getElementById('meuBotao')?.addEventListener('click', () => {
  showLoading("Processando...");
  
  // Simula ação demorada
  setTimeout(() => {
    hideLoading();
    alert("Ação concluída!");
  }, 2000);
});