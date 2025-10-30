// ===============================
// Sistema de Templates
// ===============================
const templates = {
  home: `
    <section>
      <h2>Bem-vindo à Home</h2>
      <p>Esta é a página inicial da SPA.</p>
    </section>
  `,
  sobre: `
    <section>
      <h2>Sobre Nós</h2>
      <p>Informações sobre a empresa ou projeto.</p>
    </section>
  `,
  contato: `
    <section>
      <h2>Contato</h2>
      <form id="contactForm">
        <label>Nome: <input type="text" name="nome" required></label><br><br>
        <label>Email: <input type="email" name="email" required></label><br><br>
        <button type="submit">Enviar</button>
      </form>
      <div id="formMessage"></div>
    </section>
  `
};

// ===============================
// Função Router (SPA)
// ===============================
function router() {
  const app = document.getElementById('app');
  const hash = window.location.hash.replace('#', '') || 'home';
  app.innerHTML = templates[hash] || '<section><h2>Página não encontrada</h2></section>';
  initValidation(); // Reativa validação quando muda de página
}

// ===============================
// Validação de Formulário
// ===============================
function initValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const messageDiv = document.getElementById('formMessage');

    if (nome === '' || email === '') {
      messageDiv.textContent = 'Preencha todos os campos!';
      messageDiv.style.color = 'red';
      return;
    }

    if (!email.includes('@')) {
      messageDiv.textContent = 'Email inválido!';
      messageDiv.style.color = 'red';
      return;
    }

    messageDiv.textContent = 'Formulário enviado com sucesso!';
    messageDiv.style.color = 'green';
    form.reset();
  });
}

// ===============================
// Eventos de Navegação
// ===============================
window.addEventListener('hashchange', router);
window.addEventListener('load', router);