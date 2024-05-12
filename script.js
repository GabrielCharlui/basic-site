document.addEventListener('DOMContentLoaded', (event) => {
   const centerTitle = document.querySelector('.center h1');
   let fontSize = 1.2;
   let increment = true;

   function animateTitle() {
      if (fontSize >= 2) {
         increment = false;
      } else if (fontSize <= 1.2) {
         increment = true;
      }

      fontSize += increment ? 0.01 : -0.01;
      centerTitle.style.fontSize = `${fontSize}em`;

      requestAnimationFrame(animateTitle);
   }

   animateTitle();
});
