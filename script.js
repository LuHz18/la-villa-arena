document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const esporte = document.getElementById('esporte').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  const mensagem = `Olá, ${nome}! Seu agendamento para ${esporte} na Arena La Villa está confirmado para ${data} às ${hora}.`;

  window.open(`https://wa.me/55${telefone.replace(/\\D/g, '')}?text=${encodeURIComponent(mensagem)}`, '_blank');

  document.getElementById('mensagem').innerText = "Agendamento enviado para seu WhatsApp!";
});
