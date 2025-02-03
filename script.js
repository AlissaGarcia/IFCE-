document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".col");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Remove a observação após a animação inicial
          }
        });
      },
      { threshold: 0.2 } // Define quando a animação será acionada (20% do card visível)
    );
  
    cards.forEach((card) => {
      observer.observe(card);
    }); 
  });

 // Função para lançar confetes na posição do clique
function lançarConfetes(event) {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: {
      x: event.clientX / window.innerWidth,  // Normaliza a posição X
      y: event.clientY / window.innerHeight  // Normaliza a posição Y
    }
  });
}

// Selecionar todos os botões "Assinar Plano"
document.addEventListener("DOMContentLoaded", function() {
  const botoes = document.querySelectorAll(".btn-primary");

  botoes.forEach(botao => { 
    botao.addEventListener("click", function(event) {
        event.preventDefault(); // Evita recarregar a página

        lançarConfetes(event);  // Passa o evento de clique  

        Swal.fire({
            title: "Parabéns pela compra! Você assinou nosso plano \uD83D\uDE0E",
            text: "Confira na fatura do seu cartão de crédito! \uD83D\uDE0F ",
            icon: "success",
            confirmButtonText: "Ok"
        });

      
    });
});
});