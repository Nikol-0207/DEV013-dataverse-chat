import { setApiKey } from "../lib/apiKey.js";

export function apiView() {
  const element = document.createElement("div");
  element.classList.add("window_api");
  element.innerHTML = /*html*/ `
    <header class="barra-home">
      <button class="start"><i class="fa-solid fa-house"></i>Inicio</button>
    </header>
    <main class="main-content">
     <section id="content-key">
      <h1>Ingresa tu Api Key</h1>
      <div>
         <img src="../img/mariokey.jpg" alt class="image-key"/>
      </div>
       <section class="buttons_key">
         <input type="text"  class="ingress-key" placeholder="Escribe..."/>
         <button class="confirm" class="button">Confirmar</button>
         <button class="cancelar" class="button">Cancelar</button>
      </section>
    </main>
    </section>
    <div class="icono_mario"></div>
    <footer class="footer-copy">&copy; By Karen Mora and Wendy Nicol</footer>
    <style>

      .main-content {
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
      }

      #content-key{
        border: 3px solid #000;
        border-radius: 20px 0px 20px 0px;
        height:60vh;
        width:50vh;

        background:#FBE5B5;
      }
      h1{
        display:flex;
        font-family: "Black Ops One", system-ui;
        font-size:3em;
        justify-content:center;

      }
      .buttons_key{
        display:flex;
        flex-direction:column;
        align-items: center;
      }
      .buttons_key input,
      .buttons_key button {
        margin-bottom: 10px;
      }
      button{
        font-family: "Oswald", sans-serif;
        border-radius:20px;
        width:20vh;
        height:30px;
        background:#8A8980;
        border:none;
        color:white;
        font-size:20px;
        cursor:pointer;
      }
      .ingress-key{
        font-family: "Oswald", sans-serif;
        border-radius:20px;
        height:40px;
        font-size:20px;
        width:40vh;
        padding-left:10px;
      }
      .image-key{
        width:100%;
        margin-bottom:20px;
      }
    </style>
  `;
  document.body.style.backgroundColor = "#9CECD4";
  element.addEventListener("load", () => {
    const buttonCancel = document.querySelector(".cancelar");
    const buttonConfirm = document.querySelector(".confirm");
    const ingressKey = document.querySelector(".ingress-key");
    const buttonStart = document.querySelector(".start");
    buttonStart.addEventListener("click", () => {
      window.location.href = "/";
    });

    buttonCancel.addEventListener("click", () => {
      window.location.href = "/";
    });
    buttonConfirm.addEventListener("click", () => {
      setApiKey(ingressKey.value);
      window.location.href = "/";
    });
  });
  return element;
}
