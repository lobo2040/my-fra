function mostrarMensagem() {
  alert("Nunca subestime o poder de uma frase bem dita!");
}

document.getElementById('formFrase').addEventListener('submit', function(event) {
  const autor = document.getElementById('autor').value.trim();
  const frase = document.getElementById('frase').value.trim();

  if (autor === '' || frase === '') {
    alert('Por favor, preencha todos os campos.');
    event.preventDefault();
  } else {
    alert(`Obrigado por compartilhar, ${autor}! Sua frase foi enviada.`);
  }
});
