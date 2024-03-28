import { communicateWithOpenAI } from "../lib/openAIApi.js";

export function About(props) {
      const element = document.createElement('div');
      element.classList.add('home-container');
      console.log(props)

      const MensageEnviado = (props) => {
            return `
            <article class="message message--outgoing">
                  <picture class="message__picture">
                        <img class="message__image" src="https://cdn-icons-png.freepik.com/256/10302/10302971.png" />
                  </picture>
                  <div class="message__text">
                  ${props.mensaje}
                  </div>
            </article>
            `
      }

      const MensageLLegada = (props) => {
            return `
            <article class="message message--incoming">
                  <picture class="message__picture">
                        <img class="message__image" src="${props.imageUrl}" />
                  </picture>
                  <div class="message__text">
                  ${props.mensaje}
                  </div>
            </article>
            `
      }

      element.innerHTML = /*html*/ `
            <section class="chat">
            <header class="chat__header">
                  ${props.name}
            </header>
            <main class="chat__main" id="chat__main">


            </main>
            <footer class="chat__footer">
                  <input type="text" class="chat__input" id="entrada" />
                  <button type="button" class="chat__button" id="envio"></button>
            </footer>
      </section>
      <style>
            .chat {
                  z-index: 10;
                  width: 90vmin;
                  margin: 10vh auto;
                  height: 80vh;
                  position: relative;
                  align-content: center;
                  display: grid;
                  grid-template-rows: 60px 1fr 60px;
                  flex-direction: column;
                  border-radius: 1rem;
                  overflow: hidden;
            }

            .chat__header {
                  font-weight: 900;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  padding-inline: 1rem;
                  font-size: 1.5rem;
                  background: #f3e6e6;
            }

            .chat__main {
                  background: rgb(133, 19, 19);
                  padding-inline: 1rem;
                  backdrop-filter: brightness(0.5);
                  background-blend-mode: overlay;
                  background-size: 80px;
                  /*background-image: url(https://cdn.iconscout.com/icon/free/png-256/free-star-3661048-3095468.png);
                  */
                  display: flex;
                  flex-direction: column;
                  position: absolute;
            }

            .message {
                  padding: 1rem;
                  display: flex;
                  flex-direction: column-reverse;
                  gap: .2rem;
            }

            .message--outgoing {
                  direction: rtl;
            }

            .message--outgoing .message__text{
                  direction: ltr;

                  border-radius: 1rem 1rem 0rem 1rem;
            }
            .message--outgoing .message__image {
                  transform: translateX(50%);

            }

            .message__picture {}

            .message__image {
                  width: 40px;
                  height: 40px;
                  transform: translateX(-50%);
            }

            .message__text {
                  background: white;
                  padding: 1rem;
                  border-radius: 1rem 1rem 1rem 0rem;
                  position: relative;
                  padding: .7rem 1.8rem;
                  max-width: 70%;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

            }

            .chat__footer {

                  background: #DFDADA;
                  position: unset;
                  padding-inline: 1rem;
                  display: flex;
                  gap: 1rem;
                  background: #f3e6e6;
            }

            .chat__input {
                  margin-block: .5rem;
                  background: white;
                  width: calc(100% - 6rem);;
                  font-size: 1.3rem;
                  border-radius: 1rem;
                  padding-inline: 1rem;
                  box-sizing: border-box;
                  border: unset;
                  outline: unset;
            }

            .chat__input:focus {
                  border: unset;
            }

            .chat__button {
                  margin-block: .5rem;
                  border-radius: 1rem;
                  width: 3rem;
                  font-size: 1.3rem;
                  border: unset;
                  cursor: pointer;
                  background: url(https://cdn.icon-icons.com/icons2/2996/PNG/512/send_email_icon_187511.png);
                  background-size: 60% 60%;
                  background-position: 20% 20%;
                  background-repeat: no-repeat;
                  filter: inver(1);
            }

            .chat__button:hover {
                  background: no-repeat;
            }


      </style>
      `;

      element.addEventListener("load", () => {
            const $envio = element.querySelector("#envio");
            const $entrada = element.querySelector("#entrada");
            const $chatMain = element.querySelector("#chat__main");

            $envio.addEventListener("click", () => {
                  const mensaje = $entrada.value;

                  if (mensaje.trim().length === 0) return;

                  $chatMain.innerHTML += MensageEnviado({
                        mensaje
                  });

                  communicateWithOpenAI([
                        {
                              "role": "system",
                              "content": `Eres la consola de Videojuegos ${props.name}`
                        },
                        {
                              "role": "assistant",
                              "content": props.description
                            },
                        {
                              "role": "user",
                              "content": mensaje
                        }
                  ]).then((data) => {
                        if (!data.choices.at(0).message.content) return;

                        $chatMain.innerHTML += MensageLLegada({
                              mensaje: data.choices.at(0).message.content,
                              imageUrl: props.imageUrl
                        })
                  });

                  $entrada.value = "";
            })
      });

      return element;

}
