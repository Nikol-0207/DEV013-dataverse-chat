import data from '../data/dataset.js';
import {filterData,sortData,computeStats} from "../lib/dataFunctions.js";


export const renderItems = (data) => {
  const $contenedorTarjetas = document.createElement("ul");
  $contenedorTarjetas.setAttribute("class", "container-item");

  data.forEach((item) => {
    const $tarjeta = document.createElement("li");
    $tarjeta.setAttribute("class", "li_sta");
    $tarjeta.setAttribute("id", `li-${item.id}`);
    $tarjeta.setAttribute("itemtype", "consoles");
    $tarjeta.setAttribute("itemscope", "");

    const toggleContent = function () {
      const selector = this.getAttribute("data-id");
      const $tarjeta = document.getElementById(selector);
      if (!$tarjeta) {
        return;
      }
      $tarjeta.classList.toggle("card--back-face");
      $tarjeta.classList.toggle("card--front-face");
    };

    $tarjeta.innerHTML = /*html*/ `
          <section class="card-front">
            <header class="card-front__header">

              <figure class="card-front__header-image">
                <img src="${item.imageUrl}" alt  data-itemprop="imageUrl"  />
              </figure>

            </header>
            <main class="card-front__content">
              <h2 data-itemprop="name" > ${item.name} </h2>
              <dl itemscope itemtype="consoles" class="card-back__details-list" style="margin-top: 20px;">
              <dt class="card-back__details-title" >Precio de lanzamiento: </dt>
                <dd class="card-back__item" itemprop="precioDeLanzamiento">${
                  item.precioDeLanzamiento
                }</dd>
                </dl>
                </main>
            <footer class="card-front__footer">
            <figure onclick="(${toggleContent
              .toString()
              .replace(/"/g, "'")}).call(this)" data-id="li-${
      item.id
    }" class="card-front__footer-image">
            <img src="${item.imageUrl}" alt  data-itemprop="imageUrl"  />
              </figure>
            </footer>
          </section>
          <section class="card-back">
          <header class="card-back__header">
          <figure onclick="(${toggleContent
            .toString()
            .replace(/"/g, "'")}).call(this)" data-id="li-${
      item.id
    }" class="card-back__header-image">
            <img src="${item.imageUrl}" alt  data-itemprop="imageUrl"  />
              </figure>
              <h2 data-itemprop="name" ></h2>
            </header>
            <main class="card-back__content">
              <dl itemscope itemtype="consoles" class="card-back__details-list">
                <dt ></dt>
                <dd itemprop="description" class="card-back__details-description">${
                  item.description
                }</dd>
                <dt class="card-back__details-title" style="margin-bottom: 0;">Tipo de consola: </dt>
                <dd class="card-back__item" itemprop="tipo">${item.tipo}</dd>
                <dt class="card-back__details-title" >Precio de lanzamiento: </dt>
                <dd class="card-back__item" itemprop="precioDeLanzamiento">${
                  item.precioDeLanzamiento
                }</dd>
                <dt class="card-back__details-title">Duración en el mercado: </dt>
                <dd class="card-back__item" itemprop="DuraciónEnElMercado">${
                  item.DuraciónEnElMercado
                }</dd>
                <dt class="card-back__details-title">Generacion:</dt>
                <dd class="card-back__item" itemprop="generation">${
                  item.generation
                }</dd>
                <dt class="card-back__details-title">Juego más jugado:</dt>
                <dd class="card-back__item" itemprop="JuegoMásPopular">${
                  item.JuegoMásPopular
                }</dd>
                <dt class="card-back__details-title" >Precio de lanzamiento: </dt>
                <dd class="card-back__item" itemprop="precioDeLanzamiento">${
                  item.precioDeLanzamiento
                }</dd>

              </dl>
            </main>
            <footer class="card-back__footer" >
              <figure class="card-back__footer-image">
                <img src alt  data-itemprop="imageUrlGame" />

              </figure>
            </footer>
          </section>

        `;

    $contenedorTarjetas.appendChild($tarjeta);
  });

  return $contenedorTarjetas;
};




export function Home(props) {
  const element = document.createElement("div");
  element.classList.add("home-container");
  element.innerHTML = /*html*/ `
       <header>
      <h1 name="header__titulo">CONSOLAS NINTENDO</h1>
      <section class="header">
        <p class="header__description">
          ¿Quieres conocer más sobre tus consolas de videojuegos favoritas?.. Pues ahora puedes preguntarles tu mismo!!
        </p>
      </section>
    </header>

    <main>
      <section class="card">
        <div class="box-select">
          <input name="searchName" type="text" id="buscador" />
        </div>
        <div class="box-select">
          <button  id="searchName">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>

          <button id="statics">
            <i class="fa fa-pie-chart" aria-hidden="true"></i>
          </button>
          <button id="reset" data-testid="button-clear">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
        <div class="select">
          <label class= "label-hiden" for ="mySelect"></label>
          <select name="select" id="mySelect" data-testid="select-sort">
            <option value="" disabled selected>Filtrar por generación</option>
            <option value="0">Reedición</option>
            <option value="1">Primera Generación</option>
            <option value="2">Segunda Generación</option>
            <option value="3">Tercera Generación</option>
            <option value="4">Cuarta Generación</option>
            <option value="5">Quinta Generación</option>
            <option value="6">Sexta Generación</option>
            <option value="7">Septima Generación</option>
            <option value="8">Octava Generación</option>
          </select>
          <label class= "label-hiden" for ="ordenar"></label>
          <select name="sort-order" id="ordenar">
            <option value="" disabled selected>Ordenar por nombre</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
<label class= "label-hiden" for ="type"></label>
          <select name="type-order" id="type">
            <option value="" disabled selected>Filtrar por Tipo</option>
            <option value="11">Consola de Sobremesa</option>
            <option value="7">Consola Portátil</option>
            <option value="4">Consola Portátil de doble pantalla</option>
            <option value="2">Consola Hibrída</option>
          </select>
        </div>
        <div id="root-console">
          <ul class="container-item">
          </ul>
        </div>
      </section>

      <div id="blurBackground"></div>
      <div id="popup" class="popup">
        <div class="popup-content">
          <div class="content-popup">
            <img
              src="https://fhsphoenix.org/wp-content/uploads/2023/11/Origin-1200x805.png"
              alt="Mario"
              class="imgPopup"
            />
          </div>
          <span id="closePopup" class="close">&times;</span>
          <div class="content-text-popup">
            <b>No se encontraron registros</b>
          </div>
        </div>
      </div>
      <div id="statistics-database" class="estadisticas">
        <div  id="content-histogram" class="contenido-esta">
          <canvas id="histograma"></canvas>  <!-- lienzo donde se dibujara el grafico -->
        </div>
        <span class="closeHistogram">&times;</span>
      </div>
      </main>
      <footer>&copy; By Karen Mora and Wendy Nicol</footer>
      `;



      element.addEventListener("load", () => {

        const $selecType = element.querySelector('[name="type-order"]');

        const $selection = document.querySelector("#mySelect");
        const $buscador = element.querySelector("#buscador");
        const $botonBuscar = document.querySelector("#searchName");
        const $contenedor = document.querySelector("#root");
        const $botonReset = element.querySelector("#reset");
        const popup = document.getElementById("popup");
        const blurBackground = document.querySelector("#blurBackground");
        const closeButton = document.getElementById("closePopup");

        const statistics = document.querySelector("#statistics-database");
        const closeBox = document.querySelector(".closeHistogram");
        const buttonStatistics = document.querySelector("#statics");

        $botonReset.addEventListener("click", () => {
          actualizarTarjetas(data);
          $buscador.value = "";
        });
            const actualizarTarjetas = (dataToShow) => {
              const $contenedorTarjetas = document.querySelector(".container-item");
              $contenedorTarjetas.remove();
              $contenedor.appendChild(renderItems(dataToShow));
            };
            actualizarTarjetas(data);
      })



  return element;
}
