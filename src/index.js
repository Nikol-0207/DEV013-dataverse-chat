// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
/* import data from "./Data/dataset.js"; */
/* import {filterData,sortData,computeStats} from "./lib/dataFunctions.js"; */
import { Home } from "./views/Home.js";
import { Panel } from "./views/Panel.js";
import { About } from "./views/About.js";
import { NotFound } from "./views/NotFound.js";
import { setRoot, onURLChange, setRoutes } from "./router.js";
import { renderBackground } from "./components/renderBackground.js";

const routes = {
  "/": Home,
  "/about": About,
  "/panel": Panel,
  "/not-found": NotFound,
};

setRoutes(routes);

function HandleAnchorClick(event) {
  const anchor =
    event.target.closest("a") ?? event.target.closest("[data-href]");

  if (anchor) {
    const href = anchor.getAttribute("href") ?? anchor.dataset.href;
    const url = new URL(href, window.location.origin);
    const pathname = url.pathname;
    const searchParams = url.searchParams.toString();
    const search = searchParams ? `?${searchParams}` : "";
    const newLocation = { pathname, search };
    onURLChange(newLocation);
    addEventsRouter();
  }
}
function addEventsRouter() {
  document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("click", HandleAnchorClick);
  });

  document.querySelectorAll("[data-href]").forEach((anchor) => {
    anchor.addEventListener("click", HandleAnchorClick);
  });
}
// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  const $iconos = document.querySelector("#iconos");

  
  $iconos.appendChild(renderBackground());

  const $root = document.getElementById("root");
  setRoot($root);
  // Maneja el cambio de URL para renderizar la vista correspondiente
  window.addEventListener("popstate", () => {
    onURLChange(window.location);
    addEventsRouter();
  });
  // Renderiza la vista inicial basada en la URL actual
  onURLChange(window.location);
  addEventsRouter();
});
