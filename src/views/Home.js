import data from '../data/dataset.js';
import {filterData,sortData,computeStats} from "../lib/dataFunctions.js";

function mandaItem(item) {
      return Object.entries(item)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
}


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

                </dl>
                </main>
            <footer class="card-front__footer">
            <button  class="card-front__chat " type="button" name="button" data-href="${`/about?${mandaItem(item)}`}">
              <img src="../img/hongo.png" class="image-chatButton"/>
            </button >

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
      <footer class="footer-copy">&copy; By Karen Mora and Wendy Nicol</footer>
      `;



      element.addEventListener("load", () => {
         let currentData =data;
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


        $selection.addEventListener("change", (event) => {
          const selectorName = document.querySelector("#mySelect").getAttribute("name");
          const selectedGeneration = event.target.value;
          const filtered = filterData(data, selectorName, selectedGeneration);
          currentData = filtered;
          actualizarTarjetas(filtered);
        });

        $selecType.addEventListener("input", (event) => {
          const selectorName = document.querySelector("#type").getAttribute("name"); //consigo en String devulva el nombre del elemento
          const selectedType = event.target.value;
          const filtered = filterData(data, selectorName, selectedType);
          currentData = filtered;  //se guarda en esta variable globl para ver la actual data
          actualizarTarjetas(filtered);
        });

        const $ordenarSelect = document.querySelector("#ordenar");
        $ordenarSelect.addEventListener("change", () => {
          const selectedOption = $ordenarSelect.value;
          const datosOrdenados = sortData(currentData,"name", selectedOption);

          actualizarTarjetas(datosOrdenados);
        });

        function showPopup() {
          blurBackground.style.display = "block"; //bloquea que tenga iteracion con la pagina aparte de la ventana emergente
          document.body.style.overflow = "hidden";
          popup.style.display = "block";
        }
        function hidePopup() {
          blurBackground.style.display = "none";
          document.body.style.overflow = "auto";
          popup.style.display = "none";
        }
        closeButton.addEventListener("click", hidePopup);
        // Crear el histograma con Chart.js
        let histogram;

        function getInfoToFilters() { //recopilacion de informacion
          const cardsInformation = Array.from(document.querySelectorAll(`.card-back`));  //convertir en matriz
          const data = cardsInformation.map(function (card) {  //iteracion sobre cada tarjeta
            return {
              precioDeLanzamiento: parseInt(
                card.querySelector(`[itemprop="precioDeLanzamiento"]`).textContent.split(".")[0].replace(/\D/g, "")),
              generation: card.querySelector(`[itemprop="generation"]`).textContent,
            };
          });

          const dataSort = data.sort((a, b) => a.precioDeLanzamiento - b.precioDeLanzamiento);
          const sumaGeneraciones = computeStats(dataSort);
          return sumaGeneraciones;
        }

        function showStatistics() {  //todo lo dentro de esta funcion se activa solamente cuando se llame a la funcion
          blurBackground.style.display =  "block";
          statistics.style.display = "flex";
          const ctx = document.getElementById("histograma").getContext("2d");
          const generationPrice = getInfoToFilters();
          // eslint-disable-next-line no-undef
          histogram = new Chart(ctx, {
            type: 'polarArea',
            data: {
              labels: Object.keys(generationPrice),
              datasets: [
                {
                  label: "Mayor Precio de Consola de cada Generación",
                  data: Object.values(generationPrice),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: false,
                },
              },

            },
          });
        }
        function hideStatistics() {
          histogram.destroy();
          blurBackground.style.display = "none";   //se desactiva el bloqueo para que el usuario pueda seguir iterando con la pagina
          statistics.style.display = "none";
        }

        buttonStatistics.addEventListener("click", showStatistics);
        closeBox.addEventListener("click", hideStatistics);


        // Filtrar por nombre
        const selectorName = document.querySelector("#buscador").getAttribute("name");
        $botonBuscar.addEventListener("click", () => {
          const searchTerm = $buscador.value.toLowerCase(); // convierte a minúsculas para ser insensible a mayúsculas/minúsculas
          // Filtra los elementos que contienen el término de búsqueda en el nombre
          const filteredData = filterData(data, selectorName, searchTerm);
          if (filteredData.length > 0) {
            actualizarTarjetas(filteredData);
          } else {
            showPopup();  //funcion que hace aparacer la ventana emergente
          }
        });

        $botonReset.addEventListener("click", () => {
          $buscador.value = "";
          $selecType.selectedIndex=0;
          $selection.selectedIndex=0;
          $ordenarSelect.selectedIndex=0;
          actualizarTarjetas(data);
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
