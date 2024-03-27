/* */
export function Home (props) {
      const element = document.createElement('div');
      element.classList.add('home-container');
      element.innerHTML = /*html*/ `
      <div class="mitad-body">
      <div class="container-ingress">
      <button class="ingress-button">Ingresar</button>
      </div>
      </div>
      `;




      return element;

}
