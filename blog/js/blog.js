window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quiz-form");
    const container = document.querySelector(".quiz-container");
    const respostasCertas = container.dataset.respostasCertas.split(','); // ['c','b','b']
    const linkCurso = container.dataset.linkCurso;

    const perguntas = document.querySelectorAll(".pergunta");
    let currentStep = 0;

    // Lógica de botão "Próxima"
    const botoesProximos = document.querySelectorAll(".btn-next");
    botoesProximos.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const perguntaAtual = perguntas[index];
            const selecionada = perguntaAtual.querySelector('input[type="radio"]:checked');
            if (!selecionada) {
                alert("Por favor, selecione uma resposta.");
                return;
            }

            perguntas[index].style.display = "none";
            perguntas[index + 1].style.display = "block";
        });
    });

    // Lógica de envio final
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let acertos = 0;

        respostasCertas.forEach((correta, index) => {
            const resposta = document.querySelector(`input[name="q${index + 1}"]:checked`);
            if (resposta && resposta.value === correta) {
                acertos++;
            }
        });

        const resultado = document.getElementById("resultado-quiz");
        const mensagem = document.getElementById("mensagem-resultado");
        const formCaptura = document.getElementById("form-captura");

        resultado.style.display = "block"; // mostra a aba de resultado
        form.style.display = "none";       // esconde o quiz

        if (acertos >= 3) {
            mensagem.innerHTML = `
    <h3>🎉 Parabéns!</h3>
    <p>Você acertou <strong>${acertos}/3</strong> perguntas!</p>
    <p>Você ganhou acesso ao curso gratuito!</p>
  `;
            formCaptura.style.display = "block";
        } else {
            mensagem.innerHTML = `
    <h3>😕 Ops...</h3>
    <p>Você acertou <strong>${acertos}/3</strong> perguntas.</p>
    <p>Você precisa acertar todas para liberar o curso gratuito. <br/><button onclick="reiniciarQuiz()">Tentar novamente</button></p>
  `;
            formCaptura.style.display = "none";
        }
    });
});




document.getElementById("form-dados").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = this.nome.value;
  const email = this.email.value;

  alert(`Obrigado, ${nome}! Seu curso será enviado para ${email}.`);

  // Aqui você poderia:
  // - Enviar para um backend
  // - Integrar com API de email (como Mailchimp, EmailJS, etc)
  // - Armazenar no localStorage
});

// Renicia o quiz 
function reiniciarQuiz() {
  document.getElementById("resultado-quiz").style.display = "none";
  document.getElementById("quiz-form").style.display = "block";
  document.getElementById("quiz-form").reset();

  const perguntas = document.querySelectorAll(".pergunta");
  perguntas.forEach(p => p.style.display = "none");
  perguntas[0].style.display = "block";
}