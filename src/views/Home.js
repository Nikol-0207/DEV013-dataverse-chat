export const Home= ()=> {
      const element = document.createElement('html');
      element.classList.add('home-container');
      element.innerHTML = /*html*/ `
      <h1>Home</h1>
      <p>Bienvenido a la página principal</p>
      <div class="container-ingress">
      <button class="ingress-button">Ingresar</button>
      </div>

      `;

      return element;

}
