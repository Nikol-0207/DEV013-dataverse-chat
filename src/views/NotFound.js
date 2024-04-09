export function NotFound() {
  const element = document.createElement("div");
  element.innerHTML = /*html*/ `
      <main>
        <article >

             <div class="text-baloon"> Lo sentimos, la página que estás buscando no se pudo encontrar. Puede ser que la dirección URL sea incorrecta o que la página haya sido eliminada.</div>
         
          <div class="error-container"> <!--  -->
            <div class="number-container">
              <div class="number">4</div>
              <button class="kirby-button" title="Click me">
                <img src="../img/kirby.png" alt="kirby" class="img-kirby"/>
              </button>
              <div class="number">4</div>
            </div>
            <div >
              <p class="text-error">Error, the page not found</p>
            </div>
          </div><!--  -->
        </article>
      </main>
      <aside class="img-content">
      <img src="../img/luigi.png" alt="luigi" class="img-luigi" />
      </aside>
      <footer class="footer-copy">&copy; By Karen Mora and Wendy Nicol</footer>
      <style>

      .text-baloon{
      text-align: justify;
      box-shadow: 10px 10px 4px rgba(22, 21, 21, 0.2) ;
      border-radius: 20px;
       height:  189px;
       width: 504px;
       border-color: black solid;
      background: #ffff;
       font-size: 30px;
       margin-left: 50%;

        color: #7B6E6E;
       font-family: "Oswald", sans-serif;
        padding: 10px 20px 10px 20px;
     }

     .error-container{
      display:flex;
      flex-direction:column;
      margin-left:10rem;

      height:50px;
     }
     .number-container{
      display: flex;
      flex-direction: row;
      justify-content:center;
      align-items: center;
      height:100%;
      width:50%;
      margin-top:9rem;
      margin-bottom:5rem;
     }
     .kirby-button{
      border:none;
      background:none;
     }
     .img-kirby{
      height:177px;
      width:226px;
      cursor:pointer;
     }
     .number{
      font-size: 12rem;
      color:#7B6E6E;
      font-family: "Poller One", serif;
     }
     .text-error{
        color: #7B6E6E;
        font-size: 6rem;
        font-family: "Oswald", sans-serif;
    }

     .img-content {
      height: 100vh;
      overflow: hidden;
      top:0;
      right:0;
      position:absolute;
     }

    .img-content img {
     height:100%;
     max-width: 100%;
     width: auto;
     display: block;
     position:relative;
    }
      </style>
      `;
  document.body.style.backgroundColor = "#9CECD4";
  element.addEventListener("load", () => {
    const buttonKirby = document.querySelector(".kirby-button");
    buttonKirby.addEventListener("click", () => {
      window.location.href = "/";
    });
  });
  return element;
}
