export function NotFound (props) {
 const element= document.createElement('div');
 element.innerHTML= /*html*/ `
      <h1 class="text-error">Error, the page not found</h1>
      <div class="text-baloon"> Esta página no existe ..! Pídele ayuda a Kirby para ir a la Página de Inicio y no te pierdas de nuevo
      </div>
      <div class="img-content">
      <img src="../img/luigi.png" alt="" />
      </div>
      <footer>&copy; By Karen Mora and Wendy Nicol</footer>
      `;
document.body.style.backgroundColor = '#9CECD4';
return element;
}
