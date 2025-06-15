const cursos = [
  {
    id: "nail-design", // ID único para o curso principal
    titulo: "Nail Design",
    imagem: "/img/manicure.jpg",
    cursosRelacionados: [
      {
        id: "alongamento-gel", // ID único para o curso relacionado
        titulo: "Alongamento em Gel",
        imagem: "/img/gel.jpg",
        link: "/cursos/alongamento-gel" // Link específico (opcional)
      },
      {
        id: "blindagem",
        titulo: "Blindagem de Unhas",
        imagem: "/img/blindagem.jpg",
        link: "/cursos/index.html"
      },
      {
        id: "nail-art",
        titulo: "Nail Art",
        imagem: "/img/nail-art.jpg",
        link: "/cursos/nail-art"
      }
    ]
  },
  {
    id: "bem-estar-terapias",
    titulo: "Bem-estar e Terapias Complementares",
    imagem: "/img/bem-estar.jpg",
    cursosRelacionados: [
      {
        id: "spa-maos-pes",
        titulo: "Spa das Mãos e Pés",
        imagem: "/img/spa-maos-pes.jpg",
        link: "/cursos/spa-maos-pes"
      },
      {
        id: "reflexologia",
        titulo: "Reflexologia Podal",
        imagem: "/img/reflexologia.jpg",
        link: "/cursos/reflexologia"
      },
      {
        id: "massagem-relaxante",
        titulo: "Massagem Relaxante ou Facial",
        imagem: "/img/massagem.jpg",
        link: "/cursos/massagem-relaxante"
      }
    ]
  },
  {
    id: "cabeleireiro",
    titulo: "Cabeleireira",
    imagem: "/img/cabeleireiro.jpg",
    cursosRelacionados: [
      {
        id: "corte-masculino",
        titulo: "Corte Masculino",
        imagem: "/img/corte-masculino.jpg",
        link: "/cursos/corte-masculino"
      },
      {
        id: "corte-feminino",
        titulo: "Corte Feminino",
        imagem: "/img/corte-feminino.jpg",
        link: "/cursos/corte-feminino"
      },
      {
        id: "coloracao-capilar",
        titulo: "Coloração Capilar",
        imagem: "/img/coloracao-capilar.jpg",
        link: "/cursos/coloracao-capilar"
      }
    ]
  },
  {
    id: "maquiagem",
    titulo: "Maquiagem",
    imagem: "/img/maquiagem.jpg",
    cursosRelacionados: [
      {
        id: "maquiagem-basica",
        titulo: "Maquiagem Básica",
        imagem: "/img/maquiagem-basica.jpg",
        link: "/cursos/maquiagem-basica"
      },
      {
        id: "maquiagem-avancada",
        titulo: "Maquiagem Avançada",
        imagem: "/img/maquiagem-avancada.jpg",
        link: "/cursos/maquiagem-avancada"
      },
      {
        id: "maquiagem-noiva",
        titulo: "Maquiagem para Noivas",
        imagem: "/img/maquiagem-noiva.jpg",
        link: "/cursos/maquiagem-noiva"
      }
    ]
  }
];

function mostrarCursos() {
  const gridContainer = document.getElementById('profissao');
  const destaqueContainer = document.getElementById('curso-selecionado');

  cursos.forEach(curso => {
    const card = document.createElement('div');
    card.classList.add('card-containerpai');
    card.innerHTML = `
    <div class="card-container expanded">
      <div class="card-pai">
        <img src="${curso.imagem}"alt="${curso.titulo}"/>
        <h2>${curso.titulo}</h2>
      </div>
    </div>
    `;

    // Evento para abrir o card em destaque
    card.addEventListener('click', (e) => {
      // Previne que o evento seja acionado quando clicar no botão de fechar
      if (e.target.classList.contains('close-btn')) return;
      
      mostrarCursoDestaque(curso);
    });

    gridContainer.appendChild(card);
  });
}

// Função separada para mostrar o curso em destaque
function mostrarCursoDestaque(curso) {
  const destaqueContainer = document.getElementById('curso-selecionado');
  
  // HTML do modal
  destaqueContainer.innerHTML = `
    <div class="curso-principal">
      <button class="close-btn destaque-close">&times;</button>
      <img src="${curso.imagem}" alt="${curso.titulo}" />
      <h2>${curso.titulo}</h2>
    </div>
    <div class="cursos-relacionados">
      <h3>Cursos Relacionados</h3>
      ${curso.cursosRelacionados.map(relacionado => `
        <div class="card-relacionado">
          <img src="${relacionado.imagem}" alt="${relacionado.titulo}" />
          <h4>${relacionado.titulo}</h4>
          <a href="${relacionado.link}" class="btn-inscreva" data-curso="${relacionado.titulo}">Inscreva-se</a>
        </div>
      `).join('')}
    </div>
  `;

  // Fechar modal
  document.querySelector('.destaque-close').addEventListener('click', () => {
    destaqueContainer.classList.remove('visible');
  });

  // Evento para links de inscrição
  document.querySelectorAll('.btn-inscreva').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Impede o redirecionamento imediato
      const cursoNome = btn.getAttribute('data-curso');
      const linkDestino = btn.getAttribute('href');

      // Mostra o loading
      showLoading(`Redirecionando para ${cursoNome}...`);

      // Redireciona após 1 segundo (simula processamento)
      setTimeout(() => {
        window.location.href = linkDestino;
      }, 500);
    });
  });

  // Mostra o modal
  destaqueContainer.classList.add('visible');
}

// Funções de loading (reutilizáveis)
function showLoading(message = "Carregando...") {
  const loadingScreen = document.createElement('div');
  loadingScreen.id = 'global-loading';
  loadingScreen.innerHTML = `
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <p>${message}</p>
    </div>
  `;
  document.body.appendChild(loadingScreen);
}

function hideLoading() {
  const loading = document.getElementById('global-loading');
  if (loading) loading.remove();
}



