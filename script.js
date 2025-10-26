document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('signup')?.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert('Obrigado, ' + email + '! Você receberá em breve as informações da aula.');
  document.getElementById('signup').reset();
});
