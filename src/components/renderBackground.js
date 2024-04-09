export const renderBackground = () => {
  const $contenedorIconos = document.createElement("ul");
  $contenedorIconos.setAttribute("class", "iconos");
  $contenedorIconos.innerHTML = Array.from(
    { length: 25 },
    (_, j) => `
        <li>
        ${Array.from(
    { length: 50 },
    (_, i) => `
          <i class="fi fi-rs-gamepad" style="--color: hsl(${
  (i + j) * 18
}, 90%, 50%);"></i>
          <i class="fi fi-rs-bomb" style="--color:  hsl(${
  (i + j) * 18
}, 90%, 50%);"></i>
          <i class="fi fi-rs-joystick" style="--color:  hsl(${
  (i + j) * 18
}, 90%, 50%);"></i>
          <i class="fi fi-rs-treasure-chest" style="--color:  hsl(${
  (i + j) * 18
}, 90%, 50%);"></i>
          <i class="fi fi-rs-dice-d12" style="--color:  hsl(${
  (i + j) * 18
}, 90%, 50%);"></i>
          <i class="fi fi-rr-dice-d6" style="--color:  hsl(${
  (i + j) * 18
}, 90%, 50%);"></i>

        `
  ).join("")}
      </li>
      `
  ).join("");

  return $contenedorIconos;
};
