document.addEventListener('DOMContentLoaded', (event) => {
   const centerTitle = document.querySelector('.center h1'); // Seleciona o título dentro da div 'center'
   let fontSize = 1.2; // Tamanho inicial da fonte
   let increment = true; // Controla a direção da animação

   function animateTitle() {
      if (fontSize >= 2) { // Define o tamanho máximo da fonte
         increment = false;
      } else if (fontSize <= 1.2) { // Define o tamanho mínimo da fonte
         increment = true;
      }

      fontSize += increment ? 0.01 : -0.01; // Aumenta ou diminui o tamanho da fonte
      centerTitle.style.fontSize = `${fontSize}em`; // Aplica o novo tamanho da fonte

      requestAnimationFrame(animateTitle); // Continua a animação
   }

   animateTitle(); // Inicia a animação
});