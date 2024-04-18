let $root;
/**
 * @type {{[path: string]:  (props: {[property: string]: string}) => HTMLElement}}
 */
const ROUTES = {};

/**
 * @description This function set root element
 * @param {HTMLElement} $node Represent the root element for the content inside itself
 */
export const setRoot = ($node) => {   //toma un elemento HTML como argumento 
  $root = $node;
};

/**
 * @description This function set ROUTES object
 * @param {{[path: string]:  (props: {[property: string]: string}) => HTMLElement}} routes
 */
export const setRoutes = (routes) => {
  if (typeof routes !== "object") throw new Error("Routes isn't an object");

  if (!routes["/error"] && !routes["/not-found"])
    throw new Error("routes doesn't define an /error or /not-found route");

  Object.entries(routes).forEach(([path, view]) => {
    ROUTES[path] = view;
  });

};

/**
 * @description obtain the properties from the url query
 * @param {string} query represet the url query from window.location the url storage the information for the current view
 * @returns {{[property: string]: string}} Represent properties to send to specific view
 */
const queryStringToObject = (query) => {
  const searchParams = new URLSearchParams(query);
  const properties = Object.fromEntries(searchParams.entries());
  return properties;
};

/**
 * @description
 * - clear the root element
 * - find the correct view in ROUTES for the pathname
 * - in case not found render the error view
 * - render the correct view passing the value of props
 * - add the view element to the DOM root element
 * @param {String} pathname Represent pathname of the window.location, the current ubication of the user
 * @param {{[property: string]: string}} props Represent properties to send to specific view
 */
const renderView = (pathname, props = {}) => {
  if (!(typeof pathname === "string")) return;

  $root.innerHTML = "";

  const View = ROUTES[pathname] ?? ROUTES["/not-found"];
  const $view = View(props);
  $root.appendChild($view);
  $view.dispatchEvent(new Event("load"));
};

/**
 *
 * @param {String} pathname Represent pathname of the window.location, the current ubication of the user
 * @param {{[property: string]: string}} props Represent properties to send to specific view
 */
export const navigateTo = (pathname, props = {}) => {
  let updatedPathname= pathname;
  if (pathname.startsWith("/consola") && props.name) {  //verifica si esta en la vista del chat individual
    updatedPathname = `${pathname}-${props.id.toLowerCase().replace(/\s+/g, "-")}`; //modifica la url para señalar en que consola
  }
  const state = props;
  const title = updatedPathname.replace(/[/-]/g, " ").trim() || "Data verse";
  const url = updatedPathname;
  history.pushState(state, title, url);
  renderView(pathname, props);
  document.title = title;
};

/**
 *
 * @param {Location} location
 */
export const onURLChange = (location) => {
  const search = location.search ?? "";
  const props = queryStringToObject(search);
  const pathname = location.pathname || "/";
  navigateTo(pathname, props);

};
