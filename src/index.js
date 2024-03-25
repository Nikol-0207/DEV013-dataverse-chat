// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
/* import data from "./Data/dataset.js"; */
/* import {filterData,sortData,computeStats} from "./lib/dataFunctions.js"; */
import { Home } from "./views/home";
import { consolas } from "./views/Consolas";
import { about } from "./views/About";
import { notFound } from "./views/NotFound";
import { setRoot,onURLChange,setRoutes } from "./router";
const routes = {
    "/": Home,
    "/About": about,
    "/consolas": consolas,
    "/notFound": notFound,
};
// Configura el elemento raíz donde se renderizarán las vistas
window.addEventListener('DOMContentLoaded', () => {
  const $root = document.getElementById('root');
  setRoot($root);

  // Establece las rutas definidas
  setRoutes(routes);

  // Maneja el cambio de URL para renderizar la vista correspondiente
  window.addEventListener('popstate', () => {
    onURLChange(window.location);
  });

  // Renderiza la vista inicial basada en la URL actual
  onURLChange(window.location);
});
/* setRoutes(routes);


function HandleAnchorClick(event){
const anchor = event.target.closest("a");

  if (anchor){
   const href = anchor.getAttribute("href");
   const url = new URL(href, window.location.origin);
   const pathname = url.pathname;
   const searchParams = url.searchParams.toString();
   const search =searchParams ? `?${searchParams}` : "";
   const newLocation = {pathname,search};
   onURLChange(newLocation);
  }

}
window.addEventListener("DOMContentLoaded", () => {
  const $root = document.getElementById("root");
  setRoot($root);
  onURLChange(window.location);
  document.querySelectorAll("a").forEach((anchor) =>{
     anchor.addEventListener("click", HandleAnchorClick);
  });
});
window.addEventListener("popstate", ()=>{

}) */




