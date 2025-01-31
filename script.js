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