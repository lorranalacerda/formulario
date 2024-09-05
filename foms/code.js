document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('forms');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
  
      alert(`Seja bem-vinda(o), ${nome}. Enviaremos uma mensagem de confirmação no email: ${email}`);
    });
  });
  